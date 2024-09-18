import { Button } from "../ui/button";

const items = [
  {
    bg: "//babydoge.com/cdn/shop/t/84/assets/mask-group-114@1x.png?v=51989371835117896011706708026",
    bgColor: "#0f1774",
    text: "Forum",
    desc: "A place where our communities come together to dicuss and propose ideas for Baby Doge",
    textBtn: "Join Now!",
  },
  {
    bg: "https://babydoge.com/cdn/shop/t/84/assets/Group_4205.png",
    bgColor:
      "linear-gradient(60.53deg, #0f1774 4.92%, #9520b1 98.32%, #3ff5a8 101.16%)",
    text: "Voting",
    desc: "Our community can now vote on proposals that benefit our project",
    textBtn: "Vote Now!",
  },
  {
    bg: "https://babydoge.com/cdn/shop/t/84/assets/mask-group-137@1x.png",
    bgColor: "#060715",
    text: "Security",
    desc: "Audits",
    textBtn: "Baby Doge Coin",
    textBtn2: "Baby Doge Swap",
  },
  {
    bg: "//babydoge.com/cdn/shop/t/84/assets/mask-group-138@1x.png?v=129691295697355152341706708030",
    bgColor: "#0d1460",
    text: "On the top",
    desc: "Elon is about it",
    textBtn: "See original Tweet",
  },
];
const Tokenomics = () => {
  return (
    <main className="mt-[40px]">
      <h1 className="text-[48px] text-[#00344c] font-[900] leading-[46px] text-center">
        Tokenomics
      </h1>
      <div className="flex gap-[10px] mt-[40px]">
        <div className="bg-[#f0f0f0] rounded-[41px] flex flex-col px-[34px] py-[10px] min-h-[82px] w-[33%]">
          <p className="text-[#00344c] text-[14px] font-semibold">
            Total Supply
          </p>
          <span className="text-[#158de8] text-[30px] font-bold">
            420,000,000,000,000,000
          </span>
        </div>
        <div className="bg-[#f0f0f0] rounded-[41px] flex flex-col px-[34px] py-[10px] min-h-[82px] w-[33%]">
          <p className="text-[#00344c] text-[14px] font-semibold">
            Transfer Fees
          </p>
          <span className="text-[#158de8] text-[30px] font-bold">0%</span>
        </div>
        <div className="bg-[#f0f0f0] rounded-[41px] flex flex-col px-[34px] py-[10px] min-h-[82px] w-[33%]">
          <p className="text-[#00344c] text-[14px] font-semibold">
            Baby Doge Burned
          </p>
          <span className="text-[#158de8] text-[30px] font-bold">51%</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-[20px] mt-[36px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-[425px] bg-cover bg-center rounded-[28px] p-8 text-white w-[49%]"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundColor: item.bgColor,
            }}
          >
            <p className="text-[32px] font-bold">{item.text}</p>
            <span className="mt-4 text-[18px] w-[50%] font-medium">
              {item.desc}
            </span>
            <div className="flex-grow"></div>
            <div className="flex gap-4 mt-auto mb-[20px]">
              {item.textBtn && (
                <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-8 rounded-[20px]">
                  {item.textBtn}
                </Button>
              )}
              {item.textBtn2 && (
                <Button className="bg-blue-500 text-white font-bold text-xl hover:bg-blue-600 px-10 py-8 rounded-[20px]">
                  {item.textBtn2}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tokenomics;
