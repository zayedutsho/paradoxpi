import HeroButtons from "./HeroButtons";
import { heroData } from "./heroData";

const HeroContent = () => {
  return (
    <div
      className="
        w-full
        lg:w-[39%]
        bg-[#F6E5C9]
        flex
        items-center
      "
    >
      <div
        className="
          w-full
          max-w-[420px]
          px-5
          pt-5
          pb-6
          sm:px-10
          sm:py-12
          lg:ml-[120px]
          lg:px-1
          lg:py-0
        "
      >
        <h1
          className="
            text-[#2B1204]
            text-[29px]
            sm:text-[34px]
            lg:text-[34px]
            xl:text-[42px]
            font-semibold
            leading-[0.95]
            tracking-[-0.03em]
          "
        >
          {heroData.title}
        </h1>

        <p
          className="
            mt-5
            text-[#684426]
            text-[16px]
            sm:text-[16px]
            xl:text-[16px]
            xl:font-medium
            leading-[1.25]
            sm:leading-[1.35]
          "
        >
          {heroData.description}
        </p>

        <HeroButtons />
      </div>
    </div>
  );
};

export default HeroContent;
