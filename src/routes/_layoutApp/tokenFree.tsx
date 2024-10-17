import { createFileRoute } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import MyToken from "../../components/token/MyToken";
import AllToken from "../../components/token/AllToken";
import { useActive } from "../../context/ActiveContext";
import { FaRegMessage } from "react-icons/fa6";

export const Route = createFileRoute("/_layoutApp/tokenFree")({
  component: () => {
    const { active } = useActive();
    const [activeButton, setActiveButton] = useState("token");
    const [activeButtonLock, setActiveButtonLock] = useState("allToken");
    return (
      <main className="mt-[70px] relative">
        <section
          className={`${!active ? `bg-[#DEDEDE]` : `bg-[#00121E]`} flex gap-[30px] items-center justify-center py-[15px]`}
        >
          <Button
            className={`${
              activeButton === "token"
                ? `${active ? `bg-[#06334B] text-white` : `bg-white text-black`} border-none `
                : `bg-transparent border-none ${active ? `text-white` : `text-black`}`
            } rounded-[15px] text-xl hover:border-none hover:text-current w-[5%] h-[80%]`}
            onClick={() => setActiveButton("token")}
          >
            Token
          </Button>
          <Button
            className={`${
              activeButton === "lpToken"
                ? `${active ? `bg-[#06334B] text-white` : `bg-white text-black`} border-none `
                : `bg-transparent border-none ${active ? `text-white hover:text-white` : `text-black hover:text-black`}`
            } rounded-[15px] w-[5%] h-[80%] text-xl hover:border-none`}
            onClick={() => setActiveButton("lpToken")}
          >
            LP Token
          </Button>
        </section>
        <section
          className={`px-[20%] py-[40px] flex justify-between items-center ${active ? `bg-[#10232d]` : `bg-[#f2f1f1]`}`}
        >
          <div className="flex gap-[20px]">
            <Button className="w-[120px] bg-blue-500 text-white text-xl rounded-[10px] p-8">
              Create Lock
            </Button>
            <div
              className={`${active ? `bg-[#000E17]` : `bg-[#DEDEDE]`} rounded-[20px] flex gap-[2px] p-2`}
            >
              <Button
                className={`py-6 px-8 rounded-[20px] text-xl ${
                  activeButtonLock === "allToken"
                    ? ` ${active ? `bg-[#06334B] text-white` : `bg-white text-black`}`
                    : `${active ? `text-white` : `text-black`} bg-transparent border-none `
                }`}
                onClick={() => setActiveButtonLock("allToken")}
              >
                Alls Locks
              </Button>
              <Button
                className={`py-6 px-8 rounded-[20px] text-xl ${
                  activeButtonLock === "myToken"
                    ? ` ${active ? `bg-[#06334B] text-white` : `bg-white text-black`}`
                    : `${active ? `text-white` : `text-black`} bg-transparent border-none `
                }`}
                onClick={() => setActiveButtonLock("myToken")}
              >
                My Lock
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p
              className={`text-sm font-bold ${active ? `text-white` : `text-black`}`}
            >
              Total locks
            </p>
            <span
              className={`text-3xl font-bold ${active ? `text-white` : `text-blue-500`}`}
            >
              98
            </span>
          </div>
          <div className="relative w-[220px]">
            <Input
              className={`w-full p-8 rounded-[20px] placeholder:text-xl placeholder:text-gray-400 border border-none ${active ? `bg-black` : `bg-white`}`}
              placeholder="Search for token"
            />
            <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-400" />
          </div>
        </section>
        <section className={`${active ? `bg-[#10232d]` : `bg-[#f2f1f1]`}`}>
          {activeButton === "token" ? <MyToken /> : <AllToken />}
        </section>
        <div className="absolute right-10 flex flex-col items-center justify-center">
          <FaRegMessage className="text-white text-[80px] " />
          <span className="text-[20px] font-[900] text-white">
            Your Need Help?
          </span>
        </div>
      </main>
    );
  },
});
