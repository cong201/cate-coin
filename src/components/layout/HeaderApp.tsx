import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useActive } from "../../context/ActiveContext";
import { IoIosLogOut } from "react-icons/io";

const HeaderApp = () => {
  const { active } = useActive();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setIsHovered(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`fixed flex justify-between items-center py-[10px] top-0 left-0 w-full ${
        !active ? "bg-white text-black" : "bg-[#06334B] text-white"
      } px-[10%] z-[1000] transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section className="flex items-center gap-[15px]">
        <div>
          <a href="/app">
            <img
              className="w-[100px]"
              src="//babydoge.com/cdn/shop/t/84/assets/baby-doge-logo-black@1x.png?v=83473358957494649681706707885"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex gap-[15px] h-[50px]">
          <li
            onMouseEnter={() => handleMouseEnter("item-2")}
            onMouseLeave={handleMouseLeave}
            className={`font-medium relative text-[12px] list-none hover:cursor-pointer min-w-[45px] h-[50px] flex items-center justify-center ${
              !active
                ? "hover:bg-gray-300 text-black"
                : "hover:bg-[#3e97c7] text-white"
            } hover:rounded-[20px]`}
          >
            Swap
            <ul
              className={`absolute flex flex-col gap-[10px] font-normal px-[10px] pt-[15px] pb-[15px] m-0 top-full left-0 w-[200px] list-none border border-solid  rounded-[20px]  max-h-[150px] box-border z-5000000 ${
                isHovered === "item-2" ? "block" : "hidden"
              } ${
                !active
                  ? "bg-white border-white text-black"
                  : "border-[#06334B] bg-[#06334B] text-white"
              } z-5000`}
            >
              <li>Swap</li>
              <li>Bump Portor</li>
              <li>Liquidity</li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("item-3")}
            onMouseLeave={handleMouseLeave}
            className={`font-medium relative text-[12px] list-none hover:cursor-pointer min-w-[45px] h-[50px] flex items-center justify-center ${
              !active
                ? "hover:bg-gray-300 text-black"
                : "hover:bg-[#3e97c7] text-white"
            } hover:rounded-[20px]`}
          >
            Earn
            <ul
              className={`absolute flex flex-col gap-[10px] font-normal px-[10px] pt-[15px] pb-[15px] m-0 top-full left-0 w-[200px] list-none border border-solid  rounded-[20px]  max-h-[150px] box-border z-5000000 ${
                isHovered === "item-3" ? "block" : "hidden"
              } ${
                !active
                  ? "bg-white border-white text-black"
                  : "border-[#06334B] bg-[#06334B] text-white"
              } z-5000`}
            >
              <li>Farms</li>
              <li>Pools</li>
              <li>Create your own</li>
            </ul>
          </li>
          <li
            className={` font-medium text-[12px] list-none hover:cursor-pointer flex items-center justify-center hover:rounded-[20px] min-w-[45px] h-[50px] ${
              !active
                ? "hover:bg-gray-300 text-black"
                : "hover:bg-[#3e97c7] text-white"
            }`}
          >
            Info
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("item-4")}
            onMouseLeave={handleMouseLeave}
            className={`font-medium relative text-[12px] list-none hover:cursor-pointer min-w-[45px] h-[50px] flex items-center justify-center ${
              !active
                ? "hover:bg-gray-300 text-black"
                : "hover:bg-[#3e97c7] text-white"
            } hover:rounded-[20px]`}
          >
            NFTs
            <ul
              className={`absolute flex flex-col gap-[10px] font-normal px-[10px] pt-[15px] pb-[15px] m-0 top-full left-0 w-[200px] list-none border border-solid  rounded-[20px]  max-h-[150px] box-border z-5000000 ${
                isHovered === "item-4" ? "block" : "hidden"
              } ${
                !active
                  ? "bg-white border-white text-black"
                  : "border-[#06334B] bg-[#06334B] text-white"
              } z-5000`}
            >
              <li>AI creator</li>
              <li>NFT marketplace</li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("item-5")}
            onMouseLeave={handleMouseLeave}
            className={`font-medium relative text-[12px] list-none hover:cursor-pointer min-w-[45px] h-[50px] flex items-center justify-center ${
              !active
                ? "hover:bg-gray-300 text-black"
                : "hover:bg-[#3e97c7] text-white"
            } hover:rounded-[20px]`}
          >
            NFTs
            <ul
              className={`absolute flex flex-col gap-[10px] font-normal px-[10px] pt-[15px] pb-[15px] m-0 top-full left-0 w-[200px] list-none border border-solid  rounded-[20px]  max-h-[450px] box-border z-5000000 ${
                isHovered === "item-5" ? "block" : "hidden"
              } ${
                !active
                  ? "bg-white border-white text-black"
                  : "border-[#06334B] bg-[#06334B] text-white"
              } z-5000`}
            >
              <a href="/tokenFree">Free Token Locker</a>
              <li>Voting</li>
              <li>Use Our Widget</li>
              <li>Buy With Flat</li>
              <li>Crypto Card</li>
              <li>Parternships</li>
              <li>Impact</li>

              <hr className="w-full border-0 h-[2px] bg-gray-300" />

              <li className="flex justify-between items-center">
                BabyDoge Bridge <IoIosLogOut />
              </li>
              <li className="flex justify-between items-center">
                BabyDoge Chess <IoIosLogOut />
              </li>
              <a href="/" className="flex justify-between items-center">
                About Us <IoIosLogOut />
              </a>
            </ul>
          </li>
        </div>
      </section>
      <section className="flex gap-[30px]">
        <img
          className="w-[80px]"
          src="https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cetrik.svg?v=1646935368"
          alt=""
        />
        <div className="flex gap-[5px] items-center justify-center">
          <div className="mt-[6px]">
            <svg
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.955,0A10.955,10.955,0,1,0,21.91,10.955,10.968,10.968,0,0,0,10.955,0m8.138,6.691H15.929a13.351,13.351,0,0,0-1.519-4.25,9.243,9.243,0,0,1,4.682,4.25m1.053,4.264a9.164,9.164,0,0,1-.348,2.5H16.192a23.754,23.754,0,0,0,.13-2.5,23.756,23.756,0,0,0-.13-2.5H19.8a9.165,9.165,0,0,1,.348,2.5m-9.191,9.191c-.8,0-1.689-.907-2.365-2.427a13.1,13.1,0,0,1-.8-2.5h6.326a13.1,13.1,0,0,1-.8,2.5c-.677,1.52-1.561,2.427-2.365,2.427M7.5,13.455a21.623,21.623,0,0,1,0-5h6.915a21.353,21.353,0,0,1,.145,2.5,21.352,21.352,0,0,1-.145,2.5Zm-5.733-2.5a9.165,9.165,0,0,1,.348-2.5H5.718a24.021,24.021,0,0,0,0,5H2.113a9.164,9.164,0,0,1-.348-2.5m9.191-9.191c.8,0,1.689.907,2.365,2.427a13.106,13.106,0,0,1,.8,2.5H7.792a13.106,13.106,0,0,1,.8-2.5c.677-1.52,1.561-2.427,2.365-2.427M7.5,2.441a13.348,13.348,0,0,0-1.519,4.25H2.818A9.243,9.243,0,0,1,7.5,2.441M2.818,15.22H5.981A13.35,13.35,0,0,0,7.5,19.469a9.243,9.243,0,0,1-4.682-4.25m11.593,4.25a13.354,13.354,0,0,0,1.519-4.25h3.163a9.243,9.243,0,0,1-4.682,4.25"
                fill="#2b1de6"
              />
            </svg>
          </div>
          <div className="mt-[6px]">
            <svg
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.831,10.09h-1.9a.479.479,0,0,1-.2-.025,9.711,9.711,0,0,0-1.456-3.527.947.947,0,0,1,.223-.247c.419-.419.839-.863,1.283-1.283a12.328,12.328,0,0,0-2.788-2.762c-.444.469-.913.913-1.357,1.357a.747.747,0,0,1-.172.123A9.819,9.819,0,0,0,13.913,2.27c0-.049-.025-.074-.025-.149V.149a12.511,12.511,0,0,0-3.848,0c.025.32,0,.641,0,.962V2.122a.317.317,0,0,1-.025.149A9.985,9.985,0,0,0,6.463,3.725.782.782,0,0,1,6.29,3.6c-.444-.469-.913-.913-1.357-1.357A13.147,13.147,0,0,0,2.245,5.033c.444.419.863.863,1.283,1.283a1.793,1.793,0,0,1,.221.247A9.913,9.913,0,0,0,2.294,10.09a.479.479,0,0,1-.2.025c-.642-.025-1.258,0-1.9,0H.148a13.1,13.1,0,0,0,0,3.922H2.269a10.046,10.046,0,0,0,1.505,3.578c-.026.025-.05.074-.1.1-.444.419-.863.839-1.283,1.258a.652.652,0,0,0-.123.148,12.138,12.138,0,0,0,2.762,2.739l.026-.025c.444-.469.913-.913,1.381-1.382.025-.025.074-.074.1-.074a9.535,9.535,0,0,0,3.577,1.456c0,.049.025.1.025.172-.025.642,0,1.283,0,1.925v.049a12.213,12.213,0,0,0,1.925.148,12.683,12.683,0,0,0,1.925-.148V22.006a.365.365,0,0,1,.025-.172,9.947,9.947,0,0,0,3.577-1.456c.025.025.074.049.1.074.444.47.913.914,1.382,1.382l.025.025a12.138,12.138,0,0,0,2.762-2.739c-.025-.049-.074-.074-.123-.148-.419-.419-.839-.863-1.283-1.258l-.1-.1a10.067,10.067,0,0,0,1.5-3.578h2.122a12.748,12.748,0,0,0,.148-1.948,13.088,13.088,0,0,0-.148-1.974.688.688,0,0,0-.148-.025m-5.822,2.936a5.82,5.82,0,0,1-1.086,2.566,6.106,6.106,0,0,1-1.381,1.381,5.922,5.922,0,0,1-2.566,1.061,6.305,6.305,0,0,1-1.924,0,5.909,5.909,0,0,1-2.566-1.061A5.65,5.65,0,0,1,7.1,15.592a6.271,6.271,0,0,1-1.085-2.566,6.639,6.639,0,0,1,0-1.974,6.046,6.046,0,0,1,1.06-2.566A6.331,6.331,0,0,1,8.486,7.081a5.907,5.907,0,0,1,2.566-1.06,6.161,6.161,0,0,1,.962-.075,6,6,0,0,1,3.527,1.135,6.358,6.358,0,0,1,1.407,1.406,5.8,5.8,0,0,1,1.06,2.566,6.638,6.638,0,0,1,0,1.974"
                fill="#2b1de6"
              />
            </svg>
          </div>
          <div className="w-[28px] h-[28px] rounded-[50%] bg-yellow-400 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                fill="#FFFDFA"
              />
            </svg>
          </div>
        </div>
        <div>
          <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-7 rounded-[20px]">
            Connect Wallet
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HeaderApp;
