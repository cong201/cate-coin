const Clients = () => {
  return (
    <main className="min-w-[100vh] grid place-items-center border border-gray-400 rounded-3xl overflow-hidden">
      <div className="h-[148px] m-auto relative w-full grid place-items-center overflow-hidden">
        <div className="flex animate-scroll hover:paused hover:cursor-pointer">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex">
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/CNBC-G.png?v=1688573781"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/NEWSWEEK-G.png?v=1688573674"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/NASDAQ-G.png?v=1688573762"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/NEWYORKPOST-G.png?v=1688573626"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/BUSINESSINSIDER-G.png?v=1688573651"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/BENZINGA-G.png?v=1688573712"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/MARKETWATCH-G.png?v=1688573745"
                  alt=""
                />
              </div>
              <div className="flex items-center p-[10px]">
                <img
                  className="w-[250px]"
                  src="//babydoge.com/cdn/shop/files/YAHOO-G.png?v=1688573695"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Clients;
