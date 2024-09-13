import { CornerLeftDown } from "lucide-react";
import { useEffect, useState } from "react";
import PrayTime from "../components/PrayTime";
import { days, months } from "../config";

function Home() {
  const now = new Date();

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };
  const formatArabicDate = (date: Date): string => {
    const dayOfWeek = days[date.getDay()];
    const monthIndex = date.getMonth();
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} : ( ${String(dayOfMonth).padStart(2, "0")} من ${
      months[monthIndex]
    } )`;
  };

  return (
    <>
      <div className="md:h-screen h-[80vh] bg-cover bg-center  flex   items-center  home ">
        <div className="container text-white      ">
          <p className="text-center md:text-2xl text-xl md:my-20 my-4 bg-[#000000b2] p-4 rounded-md">
            صدقة جارية لجميع أموات المسلمين
          </p>
          <h1 className="md:text-4xl text-3xl text-center md:text-start  ">
            مرحبا بك فى <br />
            موقع الموعظة الاسلامي
          </h1>
          <button className=" mx-auto md:mx-0 btn z-10 px-4 py-2 bg-transparent border-2 border-white rounded-md my-4 flex items-center text-xl relative  overflow-hidden hover:text-black">
            ابد التصفح
            <CornerLeftDown />
          </button>
        </div>
      </div>

      <div className=" mt-9 md:mt-28 shadow-inner shadow-slate-900  text-center p-4">
        <h2 className="md:text-3xl text-2xl text-green ">
          "هذا الموقع تم تصميمة ليكون صدقة جارية لجميع أموات المسلمين"
        </h2>
        <p className="md:text-2xl text-lg  py-8">
          " اللهمّ اجز الاموات عن الإحسان إحسانًا، وعن الإساءة عفوًا وغفرانًا.
          اللهم اغفر للموتى وعافهم واعف عنهم، وأكرم نزلهم، ووسع مدخلهم، واغسلهم
          بالماء والثلج والبرد، ونقهم من الذنوب كما ينقى الثوب الأبيض من الدنس.
          اللهمّ إنّ الاموات نَزَلوا بك وأنت خير منزولٍ به، وأصبحوا فقراء إلى
          رحمتك، وأنت غنيٌّ عن عذابههم. اللهمّ افسح للموتى في قبورهم مدّ بصرهم،
          وافرش قبورهم من فراش الجنّة. اللهمّ آتهم برحمتك ورضاك، وقهِم فتنة
          القبر وعذابه، وآتهم برحمتك الأمن من عذابك حتّى تبعثهم إلى جنّتك يا
          أرحم الرّاحمين. اللهمّ احم الموتى تحت الأرض، واستره يوم العرض، ولا
          تخزه يوم يبعثون “يوم لا ينفع مالٌ ولا بنون إلّا من أتى الله بقلبٍ
          سليم. اللهم آنس وحدتهم، وآنسهم في وحشتهم، وآنسهم في غربتهم، اللهم
          أنزلهم منزلًا منزلًا مباركًا، وأنت خير المنزلين، وأنزلهم منازل الشهداء
          والصديقين، وحسن أولئك رفيقًا. اللهم اغفر لهم وارفع درجتهم في المهديين،
          وافسح لهم قبورهم، ونور لهم فيه، واجعل قبورهم روضة من رياض الجنة، واغفر
          لنا ولهم يا أرحم الراحمين. اللهم اجعل قبورهم روضة من رياض الجنة، ولا
          تجعله حفرة من حفر النار، اللهم افسح له في قبره مد بصره، وافرش قبره من
          فراش الجنة. اللهم اعذهم من عذاب القبر، وجفاف الأرض على جنبيه، واملًا
          قبره بالرضا والنور، والفسحة والسرور. اللهم إن عبادك في ذمتك وحبل
          جوارك، فقهم فتنة القبر، وعذاب النار، وأنت أهل الوفاء والحق، فاغفر لهم
          وارحمهم، إنك أنت الغفور الرحيم. اللهمّ ادخلهم الجنّة من غير مناقشة
          حساب، ولا سابقة عذاب. اللهمّ آنسهم في وحدتهم، وفي وحشتهم، وفي غربتهم."
        </p>
      </div>

      <div className=" mt-9 md:mt-28  text-center p-4 text-green container">
        <h2 className="md:text-3xl text-2xl "> &#123; مواقيت الصلاة &#125;</h2>
        <p className="text-2xl pt-8">{formatTime(time)}</p>
        <p className="text-2xl pt-1 ">{formatArabicDate(now)}</p>
        <div className=" pt-8">
          <PrayTime />
        </div>
      </div>
    </>
  );
}

export default Home;
