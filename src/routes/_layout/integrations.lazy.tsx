import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { useState } from "react";

const items = [
  {
    img: "//babydoge.com/cdn/shop/files/image_256-2.png?v=1711033025",
    title: "NOW Payments",
    desc: "A gateway that lets you accept Baby Doge payments & donations in an easy way.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_257-2.png?v=1711033036",
    title: "Uniqui",
    desc: "Buy Baby Doge Coin with Credit Card or Debit Card Instantly.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_257-1.png?v=1711033045",
    title: "NOW Payments",
    desc: "Use your Baby Doge to purchase gift cards, pay bills, or even order physical products like clothing, accessories and more.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_258_7846423a-7347-48d1-8315-ad59411d8ddf.png?v=1711036522",
    title: "Guardarian",
    desc: "Buy Baby Doge with Credit card and other Fiat options.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_259_2e138175-b161-497d-9b0f-f064ad54e955.png?v=1711036550",
    title: "FCF Pays",
    desc: "Create and fund Virtual Visa or Mastercard prepaid cards with your Baby Doge.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_260.png?v=1711036543",
    title: "ANTX",
    desc: "Hire Freelancers and pay them with BabyDoge.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_261.png?v=1711036568",
    title: "COINBEES",
    desc: "Buy Gift cards for nearly 3000 stores using BabyDoge.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_262.png?v=1711036573",
    title: "HYVE",
    desc: "The First Web3 Job Exchange Available on ETH and BSC accepting BabyDoge as payment.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_263.png?v=1711036581",
    title: "LABORX",
    desc: "Log in to LaborX, find a Web3 job you’re good at & get paid in BabyDogev",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_264_63f9b700-fa0b-4249-9fb0-563d22a64970.png?v=1711036643",
    title: "CRYPTONOPIX",
    desc: "Buy BabyDoge with PIX, available for all Brazilian users.",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_263.png?v=1711036581",
    title: "LABORX",
    desc: "Log in to LaborX, find a Web3 job you’re good at & get paid in BabyDogev",
  },
  {
    img: "//babydoge.com/cdn/shop/files/image_264_63f9b700-fa0b-4249-9fb0-563d22a64970.png?v=1711036643",
    title: "CRYPTONOPIX",
    desc: "Buy BabyDoge with PIX, available for all Brazilian users.",
  },
];

export const Route = createLazyFileRoute("/_layout/integrations")({
  component: () => {
    const [activeButton, setActiveButton] = useState<string | null>("Token");

    const handleMouseEnter = (buttonName: string) => {
      setActiveButton(buttonName);
    };

    const handleMouseLeave = () => {
      setActiveButton(null);
    };

    return (
      <main className="!bg-blue-500 w-full py-[40px]">
        <div className="relative min-h-screen">
          <div className="absolute w-[40%] left-[15%] top-[120px]">
            <h1 className="text-white text-[62px] font-[900]">Integrations</h1>
            <p className="text-white text-[22px] leading-[30px] font-medium">
              With over 110 integrations and counting, Baby Doge has asserted
              its place as a premier community token in web3. Use the filters
              below to check out how you can use your BABYDOGE.
            </p>
            <Button className="bg-[#0d1557] text-[20px] py-14 px-[40px] rounded-[32px] font-bold mt-[40px] hover:cursor-pointer z-10000 hover:bg-white">
              Contact Form
            </Button>
          </div>
          <div>
            <img
              className="w-[40%] right-[10%] top-20 absolute z-50"
              src="//babydoge.com/cdn/shop/files/bbd_banner.png?v=1710869941"
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute"
              src="//babydoge.com/cdn/shop/files/Clouds_3e183085-01c0-4fda-aa07-538a25cb4bd4.png?v=1710860075"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-[10px] items-center justify-center">
          {["Token", "Coin", "Inter", "Dell", "Microsoft", "Hp"].map(
            (label) => (
              <Button
                key={label}
                className={`${
                  activeButton === label || (!activeButton && label === "Token")
                    ? "bg-[#faf8f8] text-black"
                    : "bg-[#ffffff42]"
                } hover:bg-[#faf8f8] hover:text-black text-3xl py-12 px-10 w-[10%] rounded-[32px] font-bold`}
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
              >
                {label}
              </Button>
            )
          )}
        </div>
        <div className="flex gap-[10px] items-center justify-center mt-[10px]">
          {["Tokens", "Coins", "Inters", "Dells"].map((label) => (
            <Button
              key={label}
              className={`${
                activeButton === label
                  ? "bg-[#faf8f8] text-black"
                  : "bg-[#ffffff42]"
              } hover:bg-[#faf8f8] hover:text-black text-3xl py-12 px-10 w-[10%] rounded-[32px] font-bold`}
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-center mt-[40px] gap-[40px] flex-col">
          <h2 className="text-[48px] font-[900] text-white">Utility</h2>
          <div className="grid grid-cols-5 gap-[40px] px-[160px]">
            {items.map((item) => {
              return (
                <div className="flex flex-col items-center justify-start text-center">
                  <div className="w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                    <img
                      className="bg-cover bg-center w-[96px] flex-shrink-0"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <p className="text-white font-bold text-[20px] mt-4">
                    {item.title}
                  </p>
                  <span className="text-white font-medium text-[14px]">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  },
});
