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
        lg:min-h-[560px]
        bg-[#F6E5C9]
      "
    >
      <HeroContent />
      <HeroSlider />
    </section>
  );
};

export default Hero;
