import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type FAQItem = {
  question: string;
  answer: string;
};
const faqItems: FAQItem[] = [
  {
    question: "What is Baby Doge Coin?",
    answer:
      "Despite the name, Baby Doge Coin is actually a fun collectible token built on Binance Smart Chain with the purpose to spread awareness of animal adoption. Originally created as a meme joke with 420 Quadrillion supply.",
  },
  {
    question: "What are the fees?",
    answer:
      "The community voted to remove all transfer fees so you can transfer/buy/sell now set to 0%.",
  },
  {
    question: "What do you mean by decentralized?",
    answer:
      "It means you don't have to trust any central organization or person the way you would a bank. The developers cannot seize your baby doge tokens, but they also can't return them if you send them to the wrong address. There is no company, team, or person you may rely on to increase the value or enhancement of baby doge.",
  },
  {
    question: "How can I help?",
    answer:
      "Tell your friends & family, about baby doge. Social media is a wonderful place. Click this link to Apply for partnership.",
  },
];

const Answers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main>
      <h1 className="text-4xl font-bold text-blue-500 mt-[40px] mb-[10px]">
        Answers
      </h1>
      <p className="text-[40px] text-[#00344c] font-[900] leading-[46px]">
        FAQ
      </p>
      <div className="mt-[40px] flex flex-col gap-[10px]">
        {faqItems.map((item, index) => (
          <div key={index}>
            <div
              className="flex bg-[#f0f0f0] rounded-[25px] p-[33px] min-h-[77px] flex-col cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between">
                <p className="text-[#158de8] font-bold text-4xl">
                  {item.question}
                </p>
                {activeIndex === index ? (
                  <MdKeyboardArrowUp className="w-[30px] h-[30px]" />
                ) : (
                  <MdKeyboardArrowDown className="w-[30px] h-[30px]" />
                )}
              </div>
              {activeIndex === index && (
                <div className="w-[40%] mt-[20px] overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-[#00344c] text-2xl font-semibold">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Answers;
