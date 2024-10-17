import { useActive } from "../../context/ActiveContext";
import { cn } from "../../lib/utils";

const items = [
  {
    id: 1,
    name: "hdkjash",
    des: "fhdf",
    mm: "àdsjfdsf",
  },
  {
    id: 2,
    name: "hdkjash",
    des: "fhdf",
    mm: "àdsjfdsf",
  },
  {
    id: 3,
    name: "hdkjash",
    des: "fhdf",
    mm: "àdsjfdsf",
  },
];

const AllToken = () => {
  const { active } = useActive();
  return (
    <div className="flex justify-center w-full px-[10%] py-[2%]">
      <table
        className={cn(
          "border-collapse",
          "[&_td]:h-[4.6rem]",
          "[&_td]:px-[.5rem] sm:[&_td]:[&_*]:text-[1.6rem] [&_td]:[&_*]:text-[1.1rem] text-center w-[80%]"
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
                  className={`${isFirstRow ? "rounded-tl-3xl" : ""} ${isLastRow ? "rounded-bl-3xl" : ""}`}
                >
                  {item.id}
                </td>
                <td>{item.name}</td>
                <td>{item.des}</td>
                <td>{item.mm}</td>
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

export default AllToken;
