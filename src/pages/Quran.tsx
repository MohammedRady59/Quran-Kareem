import { useQuery } from "@tanstack/react-query";
import { ISuhrah } from "../Interface";
import axios from "axios";
import Ayat from "../components/Ayat";
import { useState } from "react";

function Quran() {
  const [open, setopen] = useState(false);
  const [close, setclose] = useState(true);
  const [indexAyat, setIndex] = useState<number>(0);
  const { isPending, data } = useQuery<ISuhrah>({
    queryKey: ["surah"],
    queryFn: async () => {
      const { data } = await axios.get("https://api.alquran.cloud/v1/meta");
      return data.data;
    },
  });

  if (isPending) return "Loading...";
  function handleIndex(idx: number) {
    setopen(true);
    setIndex(idx);
    setclose(false);
  }
  return (
    <>
      {close && (
        <div className="pt-28 container ">
          <h2 className="md:text-3xl text-2xl text-center text-green ">
            {" "}
            &#123; القرأن الكريم &#125;
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-8 gap-4">
            {data?.surahs.references.map((el, idx) => (
              <div
                onClick={() => handleIndex(idx)}
                key={idx}
                className="font-serif flex flex-col   hover:bg-green hover:text-white hover:border-transparent cursor-pointer hover:scale-[1.1] duration-300 overflow-hidden  border-4 border-[#00000062] items-center rounded-tl-[1em] rounded-tr-[0] rounded-br-[1em] rounded-bl-[0]"
              >
                <p className="py-4 text-lg">{el.name} </p>
                <p className="py-4 text-lg"> {el.englishName}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && (
        <Ayat
          open={open}
          setopen={setopen}
          indexAyat={indexAyat}
          setclose={setclose}
        />
      )}
    </>
  );
}

export default Quran;
