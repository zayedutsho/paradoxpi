import { heroData } from "./heroData";

const HeroButtons = () => {
  return (
    <div
      className="
        mt-7
        flex
        flex-col
        gap-2.5
        sm:flex-wrap
        sm:flex-row
        sm:gap-4
      "
    >
      <button
        className="
          order-2
          h-9
          w-full
          min-w-[126px]
          border
          border-[#B9926E]
          bg-transparent
          px-6
          text-[#684426]
          text-[16px]
          transition-colors
          hover:bg-[#FFFAE9]
          sm:order-1
          sm:h-[34px]
          sm:w-auto
          sm:text-[16px]
        "
      >
        {heroData.secondaryButton}
      </button>

      <button
        className="
          order-1
          h-9
          w-full
          min-w-[126px]
          bg-[#FF6A19]
          px-6
          text-[#2B1204]
          text-[16px]
          font-semibold
          transition-colors
          hover:bg-[#BD4402]
          sm:order-2
          sm:h-[34px]
          sm:w-auto
          sm:text-[16px]
        "
      >
        {heroData.primaryButton}
      </button>
    </div>
  );
};

export default HeroButtons;
