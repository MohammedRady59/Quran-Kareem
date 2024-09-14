import { CircleX } from "lucide-react";
import { ITafsser } from "../Interface";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./UI/Loading";
interface IProps {
  open: boolean;
  setopen: (val: boolean) => void;
  setclose: (val: boolean) => void;
  indextafser: number;
  surah: string;
}
function SingleTafsser({
  open,
  setopen,
  indextafser,
  setclose,
  surah,
}: IProps) {
  const { isPending, data } = useQuery<ITafsser>({
    queryKey: ["singleTafser", `${indextafser}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${
          indextafser + 1
        }`
      );
      return data;
    },
  });

  if (isPending) return <Loading />;

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
        <div className=" ">
          <h3 className="text-2xl text-green font-sans text-center">{surah}</h3>
          {data?.result.map((el) => (
            <div
              key={el.id}
              className="font-serif  mt-8 font-light  leading-10  text-2xl tracking-wider"
            >
              <span className="text-green font-semibold">
                ﴿{el.aya}﴾ [{el.arabic_text}] =&gt;
              </span>
              <span className="text-[#20376a]"> {el.translation}</span>
              <hr className="border-t border-green mt-2" />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleTafsser;
