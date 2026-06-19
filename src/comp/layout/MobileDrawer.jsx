import { GraduationCap, X } from "lucide-react";
import logo from "../../assets/plogo.svg";
import { navigationLinks } from "../../data/navigation.js";

const MobileDrawer = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/75
          z-40
          transition-all

          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-full
          bg-[rgba(43,18,4,0.65)]
          backdrop-blur-[1px]
          z-[100]
          transition-transform

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-[94px] flex items-center justify-between border-b border-[#684426] px-6">
          <img
            src={logo}
            alt="ParadoxPi Academy"
            className="h-[68px] w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="flex h-12 w-12 items-center justify-center text-[#F6E5C9]"
          >
            <X size={34} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="mt-5">
          {navigationLinks.map((item, index) => {
            const isCommunity = item.title === "HOME- Community";

            return (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-8
                  py-3.5
                  text-[16px]
                  leading-none
                  transition-all

                  ${
                    isCommunity
                      ? `
                        bg-[#3D1D0B]
                        border-t border-b border-[#794B30]
                        text-[#F6E5C9]
                      `
                      : index === 0
                        ? "bg-[#FF6A19] text-[#2B1204] font-semibold"
                        : "text-[#F6E5C9]"
                  }
                `}
              >
                {isCommunity && <GraduationCap size={18} />}

                {item.title}
              </a>
            );
          })}
        </nav>

        <div className="mt-7 flex items-center gap-5 px-8 text-[#F6E5C9]">
          <span className="text-[24px] font-semibold leading-none">f</span>
          <span className="flex h-[18px] w-[26px] items-center justify-center rounded-[3px] bg-[#F6E5C9]">
            <span className="ml-[2px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#2B1204]" />
          </span>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <button
            type="button"
            className="
              h-12
              w-full
              bg-[#FF6A19]
              text-[#2B1204]
              text-[16px]
              font-semibold
            "
          >
            Get Admission
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
