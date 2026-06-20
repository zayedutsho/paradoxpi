import aboutLogo from "../../../assets/aboutlogo.png";
import circle from "../../../assets/circle.svg";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FBF3E2]
        font-['IBM_Plex_Serif']
        pb-8
        lg:min-h-[485px]
        lg:pb-0
      "
    >
      <div
        className="
          grid
          w-full
          items-center
          lg:min-h-[485px]
          lg:grid-cols-[39%_61%]
        "
      >
        {/* ================= MOBILE ================= */}
        {/* ================= MOBILE DESIGN ================= */}
        <div className="lg:hidden relative overflow-hidden min-h-[300px]">
          {/* Circle */}
          <img
            src={circle}
            alt=""
            aria-hidden="true"
            className="
      absolute
      top-[-30px]
      left-1/2
      -translate-x-1/2
      w-[450px]
      h-[450px]
      opacity-75
    "
          />

          <div className="relative z-10 px-4 pt-[120px]">
            {/* Logo */}
            <img
              src={aboutLogo}
              alt="ParadoxPi"
              className="h-[42px] w-[42px]"
            />

            {/* Line */}
            <div className="mt-2 h-px w-[70px] bg-[#2B1204]" />

            {/* Title */}
            <h2
              className="
        mt-3
        max-w-[230px]
        text-[24px]
        font-semibold
        leading-[0.9]
        text-[#2B1204]
      "
            >
              Established with
              <br />
              students in mind.
            </h2>
          </div>
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div
          className="
            hidden
            lg:flex
            relative
            min-h-[485px]
            items-center
            justify-center
          "
        >
          <img
            src={circle}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              h-[410px]
              w-[410px]
              opacity-75
            "
          />

          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-6
              px-4
              ml-[110px]
            "
          >
            <img
              src={aboutLogo}
              alt="ParadoxPi"
              className="
                h-[72px]
                w-[72px]
                object-contain
              "
            />

            <span
              aria-hidden="true"
              className="
                h-[72px]
                w-px
                bg-[#2B1204]
              "
            />

            <h2
              className="
                text-[40px]
                font-semibold
                leading-[0.9]
                text-[#2B1204]
              "
            >
              Established with
              <br />
              students in mind.
            </h2>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            relative
            z-10
            px-5
            pt-4
            text-[#684426]

            lg:max-w-[760px]
            lg:px-0
            lg:pt-0
          "
        >
          <h3
            className="
              mb-3
              text-[24px]
              font-semibold
              leading-tight
              text-[#2B1204]
              
            "
          >
            About Us
          </h3>

          <p
            className="
              text-[18px]
              leading-[1.35]

              lg:text-[24px]
              lg:leading-[1.15]
            "
          >
            We started in December 2024. ParadoxPi Academy was built with a
            clear purpose; to redefine how students experience their day-to-day
            education. We offer the most authentic and fun experience for
            students so that learning doesn't become a monotonous thing.
          </p>

          <p
            className="
              mt-5
              text-[18px]
              leading-[1.35]

              lg:mt-6
              lg:text-[24px]
              lg:leading-[1.15]
            "
          >
            Our approach is research-based, structured, and thoughtfully
            designed to ready your children for their upcoming career and future
            endeavors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
