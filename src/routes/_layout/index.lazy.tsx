import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import Clients from "../../components/common/Clients";
import Utilities from "../../components/common/Utilities";
import Values from "../../components/common/Values";
import Comunity from "../../components/common/Comunity";
import About from "../../components/common/About";
import { ToastContainer } from "react-toastify";
import Partners from "../../components/common/Partners";
import Answers from "../../components/common/Answers";
import Tokenomics from "../../components/common/Tokenomics";

export const Route = createLazyFileRoute("/_layout/")({
  component: function LayoutComponent() {
    return (
      <main className="common-container py-[20px] mt-[60px]">
        <section className="relative bg-[url('//babydoge.com/cdn/shop/files/BABY_DOGE_BANNER_2023_-_1200_X_715_1024x1024.jpg?v=1700581675')] bg-cover bg-center h-[715px] rounded-3xl mt-[20px]">
          <div className="absolute bottom-[80px] left-[40px] w-[50%] flex flex-col gap-12 p-8">
            <div>
              <span className="font-[900] text-[60px] text-white">
                The World’s Best Meme Community
              </span>
            </div>
            <div className="text-2xl font-semibold leading-relaxed text-[#c6c6c6]">
              Birthed by fans of the Doge meme community. The primary utility
              for Baby Doge is building a fun meme community to spread awareness
              of animal welfare and pet adoption. Our AI image generator allows
              our community to create Baby Doge characters and memes on demand!
            </div>
            <div className="flex gap-4 mt-[20px]">
              <Button className="bg-blue-500 hover:bg-blue-500 text-3xl py-12 px-10 rounded-[32px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                Launch App
              </Button>
              <Button className="bg-[#ffffff42] hover:bg-[#ffffff42] text-3xl py-12 px-10 rounded-[32px] font-bold">
                Explore
              </Button>
            </div>
          </div>
        </section>
        <Clients />
        <section id="about">
          <Utilities />
        </section>
        <section id="charity">
          <Values />
        </section>
        <Comunity />
        <section id="document">
          <About />
        </section>
        <section id="tokenomics">
          <Tokenomics />
        </section>
        <Partners />
        <section id="contact">
          <Answers />
        </section>
        <ToastContainer position="top-center" />
      </main>
    );
  },
});
