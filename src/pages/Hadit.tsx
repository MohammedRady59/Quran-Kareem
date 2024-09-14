import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";
import { IHadish } from "../Interface";
import Loading from "../components/UI/Loading";

function Hadit() {
  const { isPending, data } = useQuery<IHadish>({
    queryKey: ["hadith"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.hadith.gading.dev/books/muslim?range=1-300"
      );
      return data.data;
    },
  });

  if (isPending) return <Loading />;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <div className="pt-28 container ">
      <h2 className="md:text-3xl text-2xl text-center text-green ">
        {" "}
        &#123; أحاديث &#125;
      </h2>
      <div className="slider-container h-[350px] overflow-hidden mt-8">
        <Slider {...settings}>
          {data?.hadiths.map((el, idx) => (
            <div
              className="text-center hadith min-h-[350px]  px-6 py-7 "
              key={idx}
            >
              <p className=" text-[12px] md:text-xl ">{el.arab}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hadit;
