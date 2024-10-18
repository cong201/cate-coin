import { createFileRoute } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import AllToken from "../../components/token/AllToken";
import { useActive } from "../../context/ActiveContext";
import { TbMessageChatbot } from "react-icons/tb";
import axios from "axios";
import Token from "../../components/token/Token";

export const Route = createFileRoute("/_layoutApp/tokenFree")({
  component: () => {
    const { active } = useActive();
    const [activeButton, setActiveButton] = useState("token");
    const [activeButtonLock, setActiveButtonLock] = useState("allToken");
    const [tokenData, setTokenData] = useState([]);
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
            },
          }
        );
        setTokenData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      getData();
    }, []);
    return (
      <main className="pt-[70px] bg-[#00121E]">
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
          {activeButton === "token" ? (
            <Token tokenData={tokenData} />
          ) : (
            <AllToken />
          )}
        </section>
        <div
          className={`fixed right-10 bottom-[55px] flex flex-col items-center justify-center ${active ? `text-white hover:text-blue-500` : `text-blue-400 hover:text-blue-500`} hover:cursor-pointer`}
        >
          <TbMessageChatbot className="text-[80px]" />
          <span className="text-[20px] font-[900]">Your Need Help?</span>
        </div>
      </main>
    );
  },
});
