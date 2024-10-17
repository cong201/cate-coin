import { useActive } from "../../context/ActiveContext";
import { cn } from "../../lib/utils";

const items = [
  {
    id: "https://tokens.babydogenews.com/bsc-mainnet/0xba2ae424d960c26247dd6c32edc70b295c744c43/token-logo-small.png",
    name: "Cat",
    des: "BOG",
    total: "79.24",
    trans: "$1.53 USD",
    time: "47 D",
  },
  {
    id: "https://tokens.babydogenews.com/bsc-mainnet/0x7cf551258d6871b72ee1bd1624588a6245bf48c4/token-logo-small.png",
    name: "Bogged Finance",
    des: "CAT",
    total: "1316897185.79",
    trans: "$1.61 USD",
    time: "47 D",
  },
  {
    id: "https://tokens.babydogenews.com/bsc-mainnet/0x0173295183685f27c84db046b5f0bea3e683c24b/token-logo-small.png",
    name: "ChitCAT",
    des: "CHITCAT",
    total: "200000.00",
    trans: "$0.00 USD",
    time: "0 D",
  },
  {
    id: "https://tokens.babydogenews.com/bsc-mainnet/0xb09fe1613fe03e7361319d2a43edc17422f36b09/token-logo-small.png",
    name: "ChitCAT",
    des: "CHITCAT",
    total: "200000.00",
    trans: "$0.00 USD",
    time: "0 D",
  },
  {
    id: "https://tokens.babydogenews.com/bsc-mainnet/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d/token-logo-small.png",
    name: "ChitCAT",
    des: "CHITCAT",
    total: "200000.00",
    trans: "$0.00 USD",
    time: "0 D",
  },
];

const MyToken = () => {
  const { active } = useActive();
  return (
    <div className="flex justify-center w-full px-[10%] py-[2%]">
      <table
        className={cn(
          "border-collapse",
          "[&_td]:h-[4.6rem]",
          "[&_td]:px-[2rem] [&_td]:py-[8px] sm:[&_td]:[&_*]:text-[1.6rem] [&_td]:[&_*]:text-[1.1rem] w-[80%]"
        )}
      >
        <tbody>
          <tr
            className={`${active ? `text-white` : `text-black`} font-semibold`}
          >
            <td></td>
            <td>Liquidity Token</td>
            <td>Amount</td>
            <td>Lock Time Remaining</td>
            <td></td>
          </tr>
          {items.map((item, index) => {
            const isFirstRow = index === 0;
            const isLastRow = index === items.length - 1;
            return (
              <tr
                key={item.id}
                className={`${active ? `text-white bg-[#06334B]` : `text-black bg-white`} ${
                  isLastRow ? "" : "border-b"
                } border-gray-600`}
              >
                <td
                  className={`${isFirstRow ? "rounded-tl-3xl" : ""} ${isLastRow ? "rounded-bl-3xl" : ""} `}
                >
                  <img
                    src={item.id}
                    alt=""
                    className="rounded-[50%] w-[32px] h-[32px]"
                  />
                </td>
                <td className="flex gap-[4px] flex-col justify-start">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-[12px]">{item.des}</p>
                </td>
                <td className="gap-[4px]">
                  <p>{item.total}</p>
                  <p>{item.trans}</p>
                </td>
                <td>{item.time}</td>
                <td
                  className={`${isFirstRow ? "rounded-tr-3xl" : ""} ${isLastRow ? "rounded-br-3xl" : ""} text-blue-600 font-bold hover:cursor-pointer hover:text-blue-400`}
                >
                  View
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyToken;
