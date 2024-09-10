import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../common/Constant";
import { Button } from "../ui/button";

const Utilities = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[28px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] lg:max-w-[100%] flex items-center justify-center "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col justify-center mb-20 group relative shadow-lg p-0 text-white rounded-[40px] px-6 py-8 h-full w-[215px] lg:h-full min-h-[620px] lg:w-[100%] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="bottom-[10%] flex flex-col gap-3 absolute justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[14px] lg:text-[28px] font-bold">
                    {item.title}
                  </p>
                  <span className="lg:text-[22px]">{item.content}</span>
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                  <Button className="bg-blue-500 hover:bg-blue-500 text-3xl py-10 px-8 rounded-[12px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                    {item.textbtn}
                  </Button>
                  {item.textbtn2 && (
                    <Button className="bg-blue-500 hover:bg-blue-500 text-3xl py-10 px-8 rounded-[12px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                      {item.textbtn2}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Utilities;
