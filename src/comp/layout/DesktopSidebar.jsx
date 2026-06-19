import { GraduationCap } from "lucide-react";
import logo from "../../assets/plogo.svg";
import { navigationLinks } from "../../data/navigation.js";

const DesktopSidebar = () => {
  return (
    <aside
      className="
      hidden
      lg:flex
      fixed
      left-0
      top-0
      h-screen
      w-[270px]
      bg-[#2B1204]
      flex-col
      z-50
    "
    >
      {/* Logo */}

      <div className="px-[15px] py-[20px]">
        <img src={logo} alt="Logo" className="w-[160px] h-auto" />
      </div>

      {/* Navigation */}

      <nav className="flex-1">
        {navigationLinks.map((item, index) => {
          const isCommunity = item.title === "HOME- Community";

          return (
            <a
              key={item.title}
              href={item.href}
              className={`
                block
                px-[40px]
                py-[10px]
                text-[16px]
                transition-all

                ${
                  isCommunity
                    ? `
                      bg-[#3D1D0B]
                      border-t border-b border-[#794B30]
                      text-[#F6E5C9]
                      flex items-center gap-2
                    `
                    : index === 0
                      ? "bg-[#FF6A19] text-[#2B1204] font-semibold"
                      : "text-[#F6E5C9] hover:bg-[#3D1D0B]"
                }
              `}
            >
              {isCommunity && <GraduationCap size={16} />}

              {item.title}
            </a>
          );
        })}
      </nav>

      {/* CTA */}

      <div className="p-5">
        <button
          className="
          w-full
          bg-[#FF6A19]
          py-[10px]
          px-[16px]
          text-[#2B1204]
          text-sm
          font-semibold
        "
        >
          Get Admission
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
