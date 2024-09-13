import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { memo } from "react";
import { IPraytime } from "../Interface";

function PrayTime() {
  const { isPending, data } = useQuery({
    queryKey: ["time"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8"
      );
      return data.data;
    },
  });

  if (isPending) return "Loading...";

  function handlePrayTime(data: IPraytime) {
    const allPrayTime = Object.entries(data.timings);
    return allPrayTime;
  }
  const allDataTime = handlePrayTime(data);
  const requiredTimings = [
    "Fajr",
    "Sunrise",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha",
  ];

  const filteredTimings = allDataTime.filter(([name]) =>
    requiredTimings.includes(name)
  );
  const render = filteredTimings.map(([key, value]) => (
    <div
      className="card shadow-xl mt-8 mx-auto border-t min-h-[320px]  hover:bg-green hover:text-white cursor-pointer rounded-md duration-300"
      key={key}
    >
      <div className="circle relative flex justify-center items-center p-4">
        <svg className="w-[210px] h-[210px]">
          <circle className="" cx={100} cy={100} r={100} />
        </svg>
        <div className="praytime">{key}</div>
      </div>
      <p className="text-2xl">{value}</p>
    </div>
  ));
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-green">
      {render}
    </div>
  );
}

export default memo(PrayTime);
