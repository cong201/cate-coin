import { useActive } from "../../context/ActiveContext";
import { cn } from "../../lib/utils";
import { formatDateTime } from "../custom/CustomDate";

interface TokenProps {
  tokenData: Token[];
}

export interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any;
  last_updated: string;
}

const Token: React.FC<TokenProps> = ({ tokenData }) => {
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
          {tokenData.map((item, index) => {
            const isFirstRow = index === 0;
            const isLastRow = index === tokenData.length - 1;
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
                    src={item.image}
                    alt=""
                    className="rounded-[50%] w-[32px] h-[32px]"
                  />
                </td>
                <td className="flex gap-[4px] flex-col justify-start">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-[12px]">{item.symbol}</p>
                </td>
                <td className="gap-[4px]">
                  <p>{item.price_change_24h}</p>
                  <p>{item.current_price} $</p>
                </td>
                <td>{formatDateTime(item.last_updated)}</td>
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

export default Token;
