import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { MdNightlight } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useState } from "react";

const FooterApp = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <main
      className={`flex px-[10%] py-[40px] ${
        active ? "bg-[#002E46]" : "bg-white"
      }`}
    >
      <section className="w-[25%] flex flex-col items-center justify-between">
        <div>
          <img
            src="//babydoge.com/cdn/shop/t/84/assets/image-5@1x.png?v=109194159420666612811706708010"
            alt="logo"
          />
        </div>
        <div
          className={`w-[80px] rounded-[28px] bg-gray-300 h-[36px] flex items-center ${
            active ? "justify-end" : "justify-start"
          } cursor-pointer`}
          onClick={toggleActive}
        >
          {active ? (
            <div className="w-[50%] h-full bg-white rounded-[50%] flex items-center justify-center">
              <MdNightlight className="w-[30px] h-[28px]" />
            </div>
          ) : (
            <div className="w-[50%] h-full bg-white rounded-[50%] flex items-center justify-center">
              <FiSun className="w-[28px] h-[24px]" />
            </div>
          )}
        </div>
        <div className="flex gap-[30px]">
          <img
            className="w-[22px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/t/84/assets/path-644-1x-png@1x.png?v=128978131690922224841706708162"
            alt=""
          />
          <img
            className="w-[22px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/t/84/assets/path-645-1x-png@1x.png?v=94911683539124017171706708163"
            alt=""
          />
          <img
            className="w-[22px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/files/Reddit_v3_small.png?v=1689953310"
            alt=""
          />
          <img
            className="w-[18px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/t/84/assets/path-640-1x-png@1x.png?v=144585730786421459271706708158"
            alt=""
          />
          <img
            className="w-[22px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/files/Discord_v3_small.png?v=1689953497"
            alt=""
          />
          <img
            className="w-[22px] h-[22px] cursor-pointer"
            src="//babydoge.com/cdn/shop/t/84/assets/instagram_v2.png?v=181869244252596026601706708014"
            alt=""
          />
        </div>
      </section>
      <section className="w-[60%]">
        <div
          className={`flex gap-[80px] ${!active ? "text-black" : "text-white"}`}
        >
          <div className="flex flex-col gap-[20px]">
            <p className={`text-2xl font-bold cursor-pointer text-[#158de8]`}>
              ABOUT
            </p>
            <span className="text-xl font-medium cursor-pointer">CONTACT</span>
            <span className="text-xl font-medium cursor-pointer">
              COMMUNITY
            </span>
            <span className="text-xl font-medium cursor-pointer">
              BABY DOGE TOKEN
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className={`text-2xl font-bold cursor-pointer text-[#158de8]`}>
              HELP
            </p>
            <span className="text-xl font-medium cursor-pointer">
              CUSTOMER SUPPORT
            </span>
            <span className="text-xl font-medium cursor-pointer">
              TROUBLESHOOTING
            </span>
            <span className="text-xl font-medium cursor-pointer">GUIDES</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className={`text-2xl font-bold cursor-pointer text-[#158de8]`}>
              DEVELOPERS
            </p>
            <span className="text-xl font-medium cursor-pointer">
              DOCUMENTATION
            </span>
          </div>
        </div>
        <div
          className={`mt-[16px] ${!active ? "text-gray-700" : "text-gray-400"}`}
        >
          <p>
            Copyright ® 2023 Baby Doge. All Rights Reserved <br />
            Privacy Policy - Terms & Conditions
          </p>
          <span>
            Baby Doge is not an investment and created as a meme parody joke
            token like doge. It has no intrinsic value or expectations of
            financial return. Baby Doge makes no promises and is not responsible
            for any losses or errors. Use at your own risk. Baby Doge is not
            affiliated with DogeCoin. Cryptocurrency including BabyDoge may
            result in a 100% total loss.
          </span>
        </div>
      </section>
      <section className="w-[15%] flex flex-col gap-[20px]">
        <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 w-[90%] px-10 py-8 rounded-[20px]">
          Swap Baby Doge <GoArrowRight className="ml-[5px]" />
        </Button>
        <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 w-[90%] px-10 py-8 rounded-[20px]">
          Buy BNB with Fiat <GoArrowRight className="ml-[5px]" />
        </Button>
      </section>
    </main>
  );
};

export default FooterApp;
