import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        flex
        flex-col
        lg:flex-row
        bg-[#F6E5C9]

        lg:min-h-[560px]
        xl:min-h-[560px]
      "
    >
      <HeroContent />
      <HeroSlider />
    </section>
  );
};

export default Hero;
