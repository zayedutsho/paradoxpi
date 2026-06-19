import { Menu } from "lucide-react";
import logo from "../../assets/plogo.svg";

const MobileNavbar = ({ setOpen }) => {
  return (
    <header
      className="
      lg:hidden
      sticky
      top-0
      z-30
      h-[94px]
      bg-[#2B1204]
      flex
      items-center
      justify-between
      px-6
    "
    >
      <img
        src={logo}
        alt="ParadoxPi Academy"
        className="h-[88px] ml-[-30px] w-auto"
      />

      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="flex h-12 w-12 items-center justify-center text-[#F6E5C9]"
      >
        <Menu size={38} strokeWidth={2.2} />
      </button>
    </header>
  );
};

export default MobileNavbar;
