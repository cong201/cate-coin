import { Button } from "../ui/button";

const Partners = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold text-blue-500 mt-[40px] mb-[10px]">
        Partners
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[40px] text-[#00344c] font-[900] leading-[46px]">
            Our pack cannot be stopped.
          </p>
        </div>
        <div className="flex gap-[20px]">
          <Button className="bg-blue-500 text-white font-bold text-2xl hover:bg-blue-600 px-10 py-8 rounded-[20px]">
            Partner with Us
          </Button>
          <Button className="bg-[#fef7f7] border border-black text-black font-bold text-2xl hover:bg-white px-10 py-8 rounded-[20px]">
            See all partners
          </Button>
        </div>
      </div>
      <div className="min-w-[100vh] grid place-items-center rounded-3xl overflow-hidden mt-[40px] z-10">
        <div className="h-[208px] m-auto relative w-full grid place-items-center overflow-hidden">
          <div className="flex animate-scroll hover:paused hover:cursor-pointer gap-[20px]">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="flex gap-[20px]">
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/BETERO.png?v=40413889178133529331706707888"
                    alt=""
                  />
                  <p className="text-xl font-bold">BETERO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/DAPPBAY.png?v=154608121076044180441706707938"
                    alt=""
                  />
                  <p className="text-xl font-bold">DAPPBAY</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FLOKICEO.png?v=120475652279017878961706707950"
                    alt=""
                  />
                  <p className="text-xl font-bold">FLOKICEO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FAIRFI.png?v=177255127338134177231706707948"
                    alt=""
                  />
                  <p className="text-xl font-bold">LAMBOGHINI</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FCF.png?v=99898915672181845861706707949"
                    alt=""
                  />
                  <p className="text-xl font-bold">FAIRFI</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/DEFILLAMA.png?v=87077255504220385951706707940"
                    alt=""
                  />
                  <p className="text-xl font-bold">SHIDO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/ANTX.png?v=79885350875317140071706707879"
                    alt=""
                  />
                  <p className="text-xl font-bold">ALIBABA</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/CHIRPLEY.png?v=47583379221404429501706707908"
                    alt=""
                  />
                  <p className="text-xl font-bold">CONCAK</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-[100vh] grid place-items-center rounded-3xl overflow-hidden z-20">
        <div className="h-[208px] m-auto relative w-full grid place-items-center overflow-hidden">
          <div className="flex animate-scroll-reverse hover:paused hover:cursor-pointer gap-[20px]">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="flex gap-[20px] ">
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/BETERO.png?v=40413889178133529331706707888"
                    alt=""
                  />
                  <p className="text-xl font-bold">BETERO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/DAPPBAY.png?v=154608121076044180441706707938"
                    alt=""
                  />
                  <p className="text-xl font-bold">DAPPBAY</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FLOKICEO.png?v=120475652279017878961706707950"
                    alt=""
                  />
                  <p className="text-xl font-bold">FLOKICEO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FAIRFI.png?v=177255127338134177231706707948"
                    alt=""
                  />
                  <p className="text-xl font-bold">LAMBOGHINI</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/FCF.png?v=99898915672181845861706707949"
                    alt=""
                  />
                  <p className="text-xl font-bold">FAIRFI</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/DEFILLAMA.png?v=87077255504220385951706707940"
                    alt=""
                  />
                  <p className="text-xl font-bold">SHIDO</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/ANTX.png?v=79885350875317140071706707879"
                    alt=""
                  />
                  <p className="text-xl font-bold">ALIBABA</p>
                </div>
                <div className="flex items-center flex-col bg-cover bg-center bg-[#ffffffd2] px-[23px] py-[30px] border border-gray-100 rounded-[24px] shadow-[0_10px_19px_#0000000d] gap-[20px] lg:w-[140px]">
                  <img
                    className="w-[68px] h-[68px]"
                    src="//babydoge.com/cdn/shop/t/84/assets/CHIRPLEY.png?v=47583379221404429501706707908"
                    alt=""
                  />
                  <p className="text-xl font-bold">CONCAK</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partners;
