import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const Route = createFileRoute("/_layoutApp/tokenFree")({
  component: () => {
    const [activeButton, setActiveButton] = useState("token");
    const [activeButtonLock, setActiveButtonLock] = useState("allToken");

    return (
      <main className="mt-[70px]">
        <section className="bg-[#DEDEDE] flex gap-[30px] items-center justify-center py-[15px]">
          <Button
            className={`${
              activeButton === "token"
                ? "bg-white border-none text-black"
                : "bg-transparent border-none text-black"
            } rounded-[15px] text-xl hover:bg-transparent hover:border-none hover:text-current w-[5%] h-[70%]`}
            onClick={() => setActiveButton("token")}
          >
            Token
          </Button>
          <Button
            className={`${
              activeButton === "lpToken"
                ? "bg-white border-none text-black"
                : "bg-transparent border-none text-black"
            } rounded-[15px] w-[5%] h-[70%] text-xl hover:bg-transparent hover:border-none hover:text-current`}
            onClick={() => setActiveButton("lpToken")}
          >
            LP Token
          </Button>
        </section>
        <section className="px-[20%] py-[40px] flex justify-between items-center">
          <div className="flex gap-[20px]">
            <Button className="w-[120px] bg-blue-500 text-white text-xl rounded-[10px] p-8">
              Create Lock
            </Button>
            <div className="bg-[#DEDEDE] rounded-[20px] flex gap-[2px] p-2">
              <Button
                className={`py-6 px-8 rounded-[20px] text-xl hover:bg-transparent hover:border-none  ${
                  activeButtonLock === "allToken"
                    ? `bg-white text-black`
                    : `text-black bg-transparent border-none `
                }`}
                onClick={() => setActiveButtonLock("allToken")}
              >
                Alls Locks
              </Button>
              <Button
                className={`py-6 px-8 rounded-[20px] text-xl hover:bg-transparent hover:border-none  ${
                  activeButtonLock === "myToken"
                    ? `bg-white text-black`
                    : `text-black bg-transparent border-none `
                }`}
                onClick={() => setActiveButtonLock("myToken")}
              >
                My Lock
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-bold">Total locks</p>
            <span className="text-3xl font-bold text-blue-500">98</span>
          </div>
          <div>
            <Input
              className="w-[220px] p-8 rounded-[20px] placeholder:text-xl placeholder:text-gray-400"
              placeholder="Search for token"
            />
          </div>
        </section>
        <section className="px-[20%] pb-[8%] pt-[2%]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    );
  },
});
