import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { toast } from "react-toastify";
const title1 = "fdsjhf";
const title2 = "copcai cccc";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
const About = () => {
  const [_, setCopiedText] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      toast.success("Address has been copied!", {
        position: "top-center",
      });
      setTimeout(() => setCopiedText(""), 2000);
    });
  };
  return (
    <main className="mt-[60px]">
      <h1 className="text-4xl font-bold text-blue-500 mt-[40px] mb-[10px]">
        About
      </h1>
      <span className="text-[40px] text-[#00344c] font-[900] leading-[46px]">
        Baby Doge Coin <br />
        Statistics
      </span>
      <section className="bg-gradient-to-r from-[#158de8] to-[#f5853f] flex rounded-[25px] mt-[32px]">
        <div className="w-[40%] px-[20px] py-[10px]">
          <img
            className="min-w-[395px] h-[398px]"
            src="//babydoge.com/cdn/shop/t/84/assets/image-156@1x.png?v=31875061848031287451706707983"
            alt=""
          />
        </div>
        <div className="w-[60%] flex flex-col justify-center px-[60px]">
          <div className="w-[80%] h-[30%] border border-gray-400 rounded-[25px] flex items-center px-[24px] py-[40px]">
            <p className="text-3xl leading-relaxed">
              Baby Doge was born as a meme coin on the Binance Smart Chain
              (BSC), and now it's on Ethereum (ETH).
            </p>
          </div>
          <p className="text-[24px] font-bold text-white mt-[20px]">
            Built on BSC and ETH
          </p>
          <span className="text-2xl text-[#00344c] font-bold mt-[10px]">
            Baby Doge Contract Addresses <br /> 0% Fee on ETH
          </span>
          <div className="flex mt-[20px] gap-[20px]">
            <div
              onClick={() => copyToClipboard(title1)}
              className="flex gap-[10px] items-center min-w-[204px] h-[48px] bg-[#e5e5e58d] rounded-[32px] justify-center hover:cursor-pointer"
            >
              <p className="text-xl font-bold">BNB Chain Address</p>
              <BsCopy className="w-[16px] h-[16px]" />
            </div>
            <div
              onClick={() => copyToClipboard(title2)}
              className="flex gap-[10px] items-center min-w-[204px] h-[48px] bg-[#e5e5e58d] rounded-[32px] justify-center hover:cursor-pointer"
            >
              <p className="text-xl font-bold">Ethereum Address</p>
              <BsCopy className="w-[16px] h-[16px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-[20px] mt-[20px]">
        <div className="flex items-center justify-center w-[50%] bg-[#004b96] h-[425px] rounded-[25px] px-[40px] group">
          <div className="flex flex-col w-[30%]">
            <p className="text-[28px] text-white font-bold">Whitepaper</p>
            <span className="text-3xl font-semibold text-white mt-[10px]">
              View our White <br />
              Paper Below.
            </span>
            <Button className="mt-[40px] bg-[#e5e5e5b3] text-2xl py-10 px-10 rounded-[32px] font-bold">
              Read Whitepaper
            </Button>
          </div>
          <div className="bg-cover bg-center w-[70%]">
            <img
              className="w-[600px] transform transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-5"
              src="//babydoge.com/cdn/shop/t/84/assets/mask-group-113@1x.png?v=24741498393696319751706708025"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center w-[50%] bg-[#4a7dfc] h-[425px] rounded-[25px] pl-[40px] group">
          <div>
            <p className="text-[28px] text-white font-bold mb-[10px]">
              Swap Easily
            </p>
            <span className="text-3xl font-semibold text-white mt-[10px]">
              Swap BNB Chain tokens <br />
              at babydogeswap.com
            </span>
            <Button className="mt-[40px] bg-[#e5e5e5b3] text-2xl py-10 px-10 rounded-[32px] font-bold">
              Swap Now
            </Button>
          </div>
          <div className="bg-cover bg-center relative group">
            <img
              className="bg-cover bg-center h-full"
              src="//babydoge.com/cdn/shop/t/84/assets/image-254@1x.png?v=100660130434342786681706708001"
              alt=""
            />
            <div className="w-[68px] h-[60px] group-hover:shadow-[0_0_65px_rgba(243,231,13,0.7),0_0_65px_rgba(243,231,13,0.7)] absolute top-[17%] right-[40%] rounded-[32px]"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
