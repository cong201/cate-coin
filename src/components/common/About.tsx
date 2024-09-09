import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { toast } from "react-toastify";
const title1 = "fdsjhf";
const title2 = "copcai cccc";
const About = () => {
  const [_, setCopiedText] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      toast.success("Address has been copied!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
    </main>
  );
};

export default About;
