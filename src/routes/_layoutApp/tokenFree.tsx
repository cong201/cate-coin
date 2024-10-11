import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/_layoutApp/tokenFree")({
  component: () => {
    const [activeButton, setActiveButton] = useState("token");

    return (
      <main className="mt-[70px]">
        <section className="bg-gray-400 flex gap-[20px] items-center justify-center py-[15px]">
          <Button
            className={`${
              activeButton === "token"
                ? "bg-white border-none text-black"
                : "bg-transparent border-none"
            } rounded-[15px] py-[5px] text-xl hover:bg-transparent hover:border-none hover:text-current`}
            onClick={() => setActiveButton("token")}
          >
            Token
          </Button>

          <Button
            className={`${
              activeButton === "lpToken"
                ? "bg-white border-none text-black"
                : "bg-transparent border-none"
            } rounded-[15px] py-[5px] text-xl hover:bg-transparent hover:border-none hover:text-current`}
            onClick={() => setActiveButton("lpToken")}
          >
            LP Token
          </Button>
        </section>
      </main>
    );
  },
});
