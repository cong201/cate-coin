import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ServiceData } from "../../components/common/Constant";
import { FreeMode, Pagination } from "swiper/modules";
import { useActive } from "../../context/ActiveContext";

export const Route = createFileRoute("/_layoutApp/app")({
  component: () => {
    const { active } = useActive();
    return (
      <main className={`${active ? `bg-[#001d2e]` : `bg-gray-200`} `}>
        <section
          className={`bg-cover bg-center h-screen relative z-10 ${
            active
              ? "bg-[url('https://babydogeswap.com/_next/image?url=%2Fvideos%2Fhero-dark.webp&w=1200&q=75')]"
              : "bg-[url('https://swap.babydoge.com/_next/image?url=%2Fvideos%2Fhero-light.webp&w=1920&q=75')]"
          }`}
        >
          <div className="absolute top-[30%] left-[15%] max-w-[380px] flex flex-col gap-[20px]">
            <p
              className={` text-[36px] font-bold ${
                active ? `text-white` : `text-black`
              }`}
            >
              TREATS MAKE OUR TAIL WAGS
            </p>
            <span
              className={`text-[14px] font-medium ${active ? `text-white` : `text-black`}`}
            >
              Instant, no hassle! Swap any token on Binance Smart Chain just
              connecting your wallet.
            </span>
            <div className="flex gap-[20px]">
              <Button className="bg-blue-500 text-white font-bold text-2xl hover:bg-blue-600 px-10 py-9 rounded-[20px]">
                Connect Wallet
              </Button>
              <Button className="bg-white hover:bg-white text-black font-bold text-2xl px-10 py-9 rounded-[20px]">
                Swap Now!
              </Button>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col px-[80px] py-[40px]">
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
          <div
            className={`relative w-[20%] rounded-[28px] p-[10px] ${active ? `bg-[#002e467f]` : `bg-gray-300`}`}
          >
            <img
              className="absolute w-[100px] h-[100px] right-0 top-0"
              src="https://babydogeswap.com/images/homeV2/pogs.webp"
              alt=""
            />
            <div className="w-[30%]">
              <p
                className={`text-[14px] font-bold ${active ? `text-white` : `text-black`}`}
              >
                Baby Doge Coin Holder
              </p>
              <span
                className={`text-[12px] ${active ? `text-white` : `text-black`}`}
              >
                all time
              </span>
              <p className="text-[#008fef7f] text-[32px] font-bold">0</p>
            </div>
          </div>
          <div
            className={`relative w-[20%] rounded-[28px] p-[10px] ${active ? `bg-[#002e467f]` : `bg-gray-300`}`}
          >
            <img
              className="absolute w-[100px] h-[100px] right-0 top-0"
              src="https://babydogeswap.com/images/homeV2/tvl.webp"
              alt=""
            />
            <div className="w-[30%]">
              <p
                className={`text-[14px] font-bold ${active ? `text-white` : `text-black`}`}
              >
                TVL{" "}
              </p>
              <span
                className={`text-[12px] ${active ? `text-white` : `text-black`}`}
              >
                Total Value Locked
              </span>
              <p className="text-[#008fef7f] text-[32px] font-bold">0,00</p>
            </div>
          </div>
          <div
            className={`relative w-[20%] rounded-[28px] p-[10px] ${active ? `bg-[#002e467f]` : `bg-gray-300`}`}
          >
            <img
              className="absolute w-[100px] h-[100px] right-0 top-0"
              src="	https://babydogeswap.com/images/homeV2/swaps.webp"
              alt=""
            />
            <div className="w-[30%]">
              <p
                className={`text-[14px] font-bold ${active ? `text-white` : `text-black`}`}
              >
                Swaps
              </p>
              <span
                className={`text-[12px] ${active ? `text-white` : `text-black`}`}
              >
                in the last 24 hours
              </span>
              <p className="text-[#008fef7f] text-[32px] font-bold">0</p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center gap-[40px]">
          <div className="w-[320px]">
            <p
              className={`text-[36px] font-bold ${active ? `text-white` : `text-black`}`}
            >
              As low as <span className="text-blue-500">0.09%</span> Swap Fees!
            </p>
            <p
              className={`text-[10px] font-bold ${active ? `text-white` : `text-black`}`}
            >
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
        <section className="w-[70%] flex items-center justify-center rounded-[28px] pr-[40px] py-[40px] gap-[32px] mx-auto">
          <div className="w-[80%]">
            <img
              src="https://babydogeswap.com/images/homeV2/babydoge-crater.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <p
              className={`text-[36px] font-bold ${active ? `text-white` : `text-black`}`}
            >
              Earn rewards with crypto.
            </p>
            <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-10 rounded-[14px] w-[30%]">
              Explore
            </Button>
            <span
              className={`text-[14px] ${active ? `text-white` : `text-black`}`}
            >
              <span className="font-bold">Project owners :</span> create a
              rewards farm for your community and add utility to your project.
            </span>
            <Button
              className={`border-[3px] border-blue-900 text-blue-900 font-bold text-xl px-10 py-10 rounded-[14px] w-[30%] ${active ? `bg-[#002E46]` : `bg-white`}`}
            >
              Create Farm
            </Button>
          </div>
        </section>
        <section className="flex items-center justify-center mt-[40px] px-[20%] gap-[20px]">
          <div className="w-[50%] flex flex-col gap-[20px]">
            <p
              className={`${active ? `text-white` : `text-black`} text-[36px] font-bold`}
            >
              The meme that changed the game.
            </p>
            <span
              className={`${active ? `text-white` : `text-black`} text-[16px] font-medium`}
            >
              The meme that started it all is at the heart of the BabyDoge
              ecosystem. The first AMM with lowered fees for holders.
            </span>
            <div className="flex gap-[20px]">
              <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-10 rounded-[14px]">
                Buy Baby Dog
              </Button>
              <Button
                className={`border-[3px] border-blue-900 text-blue-900 font-bold text-xl px-10 py-10 rounded-[14px] w-[30%] ${active ? `bg-[#002E46]` : `bg-white`}`}
              >
                View Our Pack
              </Button>
            </div>
          </div>
          <div className="w-[540px] h-[440px] ">
            <img
              src="https://babydogeswap.com/images/homeV2/babydoge-ooo.webp"
              alt=""
            />
          </div>
        </section>
        <section className="mt-[40px]">
          <h1
            className={`text-center uppercase text-[24px] font-semibold ${active ? `text-white` : `text-black`} `}
          >
            As Seen In
          </h1>
          <div className="min-w-[100vh] grid place-items-center rounded-3xl overflow-hidden mt-[10px]">
            <div className="h-[148px] m-auto relative w-full grid place-items-center overflow-hidden">
              <div className="flex animate-scroll hover:paused hover:cursor-pointer">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex">
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/CNBC-G.png?v=1688573781"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/NEWSWEEK-G.png?v=1688573674"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/NASDAQ-G.png?v=1688573762"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/NEWYORKPOST-G.png?v=1688573626"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/BUSINESSINSIDER-G.png?v=1688573651"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/BENZINGA-G.png?v=1688573712"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/MARKETWATCH-G.png?v=1688573745"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center p-[10px]">
                      <img
                        className="w-[250px]"
                        src="//babydoge.com/cdn/shop/files/YAHOO-G.png?v=1688573695"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col mt-[60px] pb-[40px]">
          <h1
            className={`text-center text-[36px] font-bold ${active ? `text-white` : `text-black`} `}
          >
            Why list your project on Baby Doge Swap?
          </h1>
          <div className="flex items-center justify-center mt-[40px]">
            <div className="w-[25%] flex flex-col items-center justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="https://babydogeswap.com/images/home/list/no-fees.svg"
                alt=""
              />
              <p
                className={`${active ? `text-white` : `text-black`} text-[12px] font-medium`}
              >
                Ability to provide ZERO swap fees (0%!) to your community.
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="https://babydogeswap.com/images/home/list/liquidity.svg"
                alt=""
              />
              <p
                className={`${active ? `text-white` : `text-black`} text-[12px] font-medium`}
              >
                Sponsor a farm or pool so your project has more liquidity and
                locked tokens.
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="https://babydogeswap.com/images/home/list/community.svg"
                alt=""
              />
              <p
                className={`${active ? `text-white` : `text-black`} text-[12px] font-medium`}
              >
                Reward your community.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  },
});
