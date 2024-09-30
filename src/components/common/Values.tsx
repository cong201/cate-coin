import { Button } from "../ui/button";

const Values = () => {
  return (
    <main className="bg-gray-200 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] py-[20px] mt-[60px]">
      <div className="common-container">
        <h1 className="text-4xl font-bold text-blue-500 mb-[10px]">
          Our Values
        </h1>
        <p className="text-[40px] text-[#00344c] font-[900]">
          The Pillars of Baby Doge
        </p>
        <section className="flex bg-[#1d1d44] items-center justify-center px-[30px] py-[80px] rounded-3xl mt-[40px]">
          <div className="flex flex-col w-[50%] gap-[20px] px-[40px]">
            <p className="text-[36px] font-bold text-white">Community</p>
            <span className="text-3xl text-white leading-relaxed">
              Birthed by fans of the Doge meme community.The primary utility for
              Baby Doge is building a fun meme community to spread awareness of
              animal welfare and pet adoption. Our ai image generator allows our
              community to create baby doge characters and memes on demand !
            </span>
            <Button className="bg-blue-500 w-[40%] mt-[40px] hover:bg-blue-500 text-3xl py-10 px-10 rounded-[32px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
              Join community
            </Button>
          </div>
          <div className="w-[50%]">
            <img className="w-[1600px]" src="../../img/iphone.png" alt="" />
          </div>
        </section>
        <section className="flex gap-[20px] mt-[40px] mb-[40px]">
          <div className="bg-[url('https://babydoge.com/cdn/shop/files/bg_utility.png?v=1711371186')] relative bg-cover bg-center h-[610px] w-[50%] rounded-[32px]">
            <div className="absolute flex flex-col bottom-[60px] px-[40px] z-10">
              <p className="text-[32px] text-white font-bold">Utility</p>
              <span className="text-3xl text-white leading-relaxed">
                Baby Doge was created initially as a joke meme coin with a
                purpose to help save dogs and spread awareness of animal
                adoption. After success of Baby Doge our community has built an
                Ai image and meme generator, swap and aggregator, chess game,
                NFT collections, partnered with payment and wallet apps, farming
                as a service, Baby Doge Card, token locker, many dapp
                integrations all while donating over $1 million to animal
                adoption.
              </span>
              <Button className="bg-blue-500 w-[40%] mt-[40px] hover:bg-blue-500 text-3xl py-10 px-10 rounded-[32px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                Read Whitepaper
              </Button>
            </div>
            <div className="absolute inset-0 rounded-[32px] z-0 bg-black opacity-50"></div>
          </div>

          <div className="bg-[url('//babydoge.com/cdn/shop/t/84/assets/image-222@1x.png?v=101618736657587889431706707993')] relative bg-cover bg-center h-[610px] w-[50%] rounded-[32px]">
            <div className="absolute bottom-[60px] px-[40px] z-10">
              <p className="text-[32px] text-white font-bold">Charity</p>
              <span className="text-3xl text-white leading-relaxed">
                Saving dogs is a core mission at Baby Doge. Our philanthropic
                endeavors have allowed us to show the world that crypto can be a
                positive driving force for animals. We have donated over $1M USD
                to our charity partners thanks to our community.
              </span>
              <div className="flex gap-[20px]">
                <Button className="bg-blue-500 mt-[40px] hover:bg-blue-500 text-3xl py-10 px-10 rounded-[32px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                  View Impact
                </Button>
                <Button className="bg-blue-500 mt-[40px] hover:bg-blue-500 text-3xl py-10 px-10 rounded-[32px] font-bold transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.7)]">
                  Donate Crypto
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 rounded-[32px] z-0 bg-orange-600 opacity-15"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Values;
