import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { sliderData } from "./sliderData";

const HeroSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className="
        relative
        w-full
        lg:w-[61%]
        overflow-hidden
      "
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className="
                min-w-full
              "
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="
                  w-full
                  h-[260px]
                  sm:h-[420px]
                  lg:h-[560px]
                  object-cover
                "
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        className="
          absolute
          left-0
          top-1/2
          hidden
          h-full
          w-10
          -translate-y-1/2
          items-center
          justify-center
          bg-black/60
          text-white
          transition-colors
          hover:bg-black/35
          lg:flex
        "
      >
        <ChevronLeft size={24} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        className="
          absolute
          right-0
          top-1/2
          hidden
          h-full
          w-10
          -translate-y-1/2
          items-center
          justify-center
          bg-black/20
          text-white
          transition-colors
          hover:bg-black/35
          lg:flex
        "
      >
        <ChevronRight size={24} strokeWidth={1.8} />
      </button>

      <div
        className="
          absolute
          bottom-8
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >
        {sliderData.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`
              h-[6px]
              rounded-full
              transition-all
              ${
                selectedIndex === index
                  ? "w-9 bg-white"
                  : "w-[6px] bg-white/45 hover:bg-white/75"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
