import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
const Footer = () => {
  return (
    <main className="flex common-container py-[40px]">
      <section className="w-[25%] flex flex-col items-center justify-between">
        <div>
          <img
            src="//babydoge.com/cdn/shop/t/84/assets/image-5@1x.png?v=109194159420666612811706708010"
            alt=""
          />
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
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#158de8] text-2xl font-bold cursor-pointer">
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
            <p className="text-[#158de8] text-2xl font-bold cursor-pointer">
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
            <p className="text-[#158de8] text-2xl font-bold cursor-pointer">
              DEVELOPERS
            </p>
            <span className="text-xl font-medium cursor-pointer">
              DOCUMENTATION
            </span>
          </div>
        </div>
        <div className="text-gray-400 mt-[16px]">
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
            result in a 100% total loss
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

export default Footer;
