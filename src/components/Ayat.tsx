import { CircleX } from "lucide-react";
import ayat from "../assets/Images/ayat.png";
import { IAyat } from "../Interface";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./UI/Loading";
interface IProps {
  open: boolean;
  setopen: (val: boolean) => void;
  setclose: (val: boolean) => void;
  indexAyat: number;
}
function Ayat({ open, setopen, indexAyat, setclose }: IProps) {
  const { isPending, data } = useQuery<IAyat>({
    queryKey: ["ayat", `${indexAyat}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.alquran.cloud/v1/surah/${indexAyat + 1}`
      );
      return data.data;
    },
  });

  if (isPending) return <Loading />;
  console.log(indexAyat);
  function handler() {
    setclose(true);
    setopen(false);
  }
  return (
    <div
      className={`   text-black h-full w-full   absolute bg-white inset-0 z-10 ${
        open ? "translate-x-0 " : "translate-x-full"
      } duration-300 transition-all`}
    >
      <div
        className="absolute right-8 top-28 p-2 bg-green flex justify-center items-center rounded-md text-white cursor-pointer"
        onClick={handler}
      >
        <CircleX />
      </div>
      <div className="container mt-28 flex flex-col items-center">
        <h3 className="text-2xl text-green font-sans">{data?.name}</h3>
        <p className="text-lg py-4 text-green">
          عدد الأيات : ( {data?.numberOfAyahs} )
        </p>
        <div>
          <audio controls>
            <source
              src={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${
                indexAyat + 1
              }.mp3`}
              type="audio/mp3"
            />
          </audio>
        </div>

        <div className="w-1/4">
          <img src={ayat} alt="ayat" loading="lazy" className="w-full block" />
        </div>
        <div className="flex flex-wrap gap-2 ">
          {data?.ayahs.map((el, idx) => (
            <p
              className="font-serif  font-light  leading-10  text-2xl tracking-wider	 "
              key={idx}
            >
              {el.text} ﴿{el.numberInSurah}﴾
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ayat;
