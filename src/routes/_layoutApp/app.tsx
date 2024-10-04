import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ServiceData } from "../../components/common/Constant";
import { FreeMode, Pagination } from "swiper/modules";

export const Route = createFileRoute("/_layoutApp/app")({
  component: () => (
    <main className="z-10 bg-[#001d2e]">
      <section className="bg-[url('https://babydogeswap.com/_next/image?url=%2Fvideos%2Fhero-dark.webp&w=1200&q=75')] bg-cover bg-center h-screen relative z-10">
        <div className="absolute top-[30%] left-[15%] max-w-[380px] flex flex-col gap-[20px]">
          <p className="text-white text-[36px] font-bold">
            TREATS MAKE OUR TAIL WAGS
          </p>
          <span className="text-white text-[14px] font-medium">
            Instant, no hassle! Swap any token on Binance Smart Chain just
            connecting your wallet.
          </span>
          <div className="flex gap-[20px]">
            <Button className="bg-blue-500 text-white font-bold text-2xl hover:bg-blue-600 px-10 py-9 rounded-[20px]">
              Connect Wallet
            </Button>
            <Button className="bg-white hover:bg-white text-black font-bold text-2xl  px-10 py-9 rounded-[20px]">
              Swap Now!
            </Button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col bg-[#001d2e] px-[80px] py-[40px]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 4,
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
      </section>
      <section className="pb-[40px] flex items-center justify-center gap-[20px]">
        <div className="relative w-[20%] bg-[#002e467f] rounded-[28px] p-[10px]">
          <img
            className="absolute w-[100px] h-[100px] right-0 top-0"
            src="https://babydogeswap.com/images/homeV2/pogs.webp"
            alt=""
          />
          <div className="w-[30%]">
            <p className="text-[14px] text-white font-bold">
              Baby Doge Coin Holder
            </p>
            <span className="text-[12px] text-white">all time</span>
            <p className="text-[#008fef7f] text-[32px] font-bold">0</p>
          </div>
        </div>
        <div className="relative w-[20%] bg-[#002e467f] rounded-[28px] p-[10px]">
          <img
            className="absolute w-[100px] h-[100px] right-0 top-0"
            src="https://babydogeswap.com/images/homeV2/tvl.webp"
            alt=""
          />
          <div className="w-[30%]">
            <p className="text-[14px] text-white font-bold">TVL </p>
            <span className="text-[12px] text-white">Total Value Locked</span>
            <p className="text-[#008fef7f] text-[32px] font-bold">0,00</p>
          </div>
        </div>
        <div className="relative w-[20%] bg-[#002e467f] rounded-[28px] p-[10px]">
          <img
            className="absolute w-[100px] h-[100px] right-0 top-0"
            src="	https://babydogeswap.com/images/homeV2/swaps.webp"
            alt=""
          />
          <div className="w-[30%]">
            <p className="text-[14px] text-white font-bold">Swaps</p>
            <span className="text-[12px] text-white">in the last 24 hours</span>
            <p className="text-[#008fef7f] text-[32px] font-bold">0</p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center gap-[40px]">
        <div className="w-[320px]">
          <p className="text-white text-[36px] font-bold">
            As low as <span className="text-blue-500">0.09%</span> Swap Fees!
          </p>
          <p className="text-[10px] text-white font-bold">
            Must be holding Baby Doge,
            <a
              className="text-blue-500"
              href="https://docs.babydogeswap.com/babydoge-docs-1/babydoge-docs/products/swaps/token-swaps"
              target="_blank"
              rel="noopener noreferrer"
            >
              see documentation
            </a>
            for more info.
          </p>
        </div>
        <div>
          <img
            className="max-w-[400px] max-h-[400px]"
            src="https://babydogeswap.com/images/homeV2/swap-fees.webp"
            alt=""
          />
        </div>
      </section>
      <section className="bg-[#002E46] w-[60%] flex items-center justify-center rounded-[28px] py-[40px]">
        <div className="w-[60%]">
          <img
            src="https://babydogeswap.com/images/homeV2/babydoge-crater.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[36px] font-bold ">
            Earn rewards with crypto.
          </p>
          <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-7 rounded-[20px]">
            Explore
          </Button>
          <span>
            Project owners : create a rewards farm for your community and add
            utility to your project.
          </span>
          <Button>Create Farm</Button>
        </div>
      </section>
    </main>
  ),
});
