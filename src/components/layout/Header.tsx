import { Button } from "../ui/button";

const Header = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex items-center justify-center">
      <section className="fixed top-[20px] z-[999] bg-white grid grid-cols-[1.5fr_6fr_1fr_1.5fr] gap-4 items-center py-4 px-8 rounded-[28px] w-[70%]">
        <div>
          <a href="/">
            <img
              src="//babydoge.com/cdn/shop/t/84/assets/baby-doge-logo-black@1x.png?v=83473358957494649681706707885"
              alt=""
            />
          </a>
        </div>
        <div className="flex space-x-[36px] text-xl justify-center font-bold">
          <a
            className="hover:text-blue-600 hover:cursor-pointer"
            onClick={() => handleScrollTo("about")}
          >
            About
          </a>
          <a
            className="hover:text-blue-600 hover:cursor-pointer"
            onClick={() => handleScrollTo("tokenomics")}
          >
            Tokenomics
          </a>
          <a className="hover:text-blue-600 hover:cursor-pointer" href="">
            Integration
          </a>
          <a className="hover:text-blue-600 hover:cursor-pointer" href="">
            Charity
          </a>
          <a
            className="hover:text-blue-600 hover:cursor-pointer"
            onClick={() => handleScrollTo("document")}
          >
            Document
          </a>
          <a className="hover:text-blue-600 hover:cursor-pointer" href="">
            Swap
          </a>
          <a
            className="hover:text-blue-600 hover:cursor-pointer"
            onClick={() => handleScrollTo("contact")}
          >
            Contact
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cetrik.svg?v=1646935368"
              alt=""
            />
          </a>
        </div>
        <div className="flex justify-end">
          <Button className="bg-blue-500 text-white font-bold text-2xl hover:bg-blue-600 px-10 py-8 rounded-[20px]">
            Launch App
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Header;
