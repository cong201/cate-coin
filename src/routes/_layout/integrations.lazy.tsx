import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { useState } from "react";

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
      </main>
    );
  },
});
