import { useState } from "react";

import DesktopSidebar from "./comp/layout/DesktopSidebar";
import MobileDrawer from "./comp/layout/MobileDrawer";
import MobileNavbar from "./comp/layout/MobileNavbar";
import About from "./comp/sections/about/About.jsx";
import Hero from "./comp/sections/hero/Hero.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopSidebar />

      <MobileNavbar setOpen={setOpen} />

      <MobileDrawer open={open} setOpen={setOpen} />

      <main
        className="
          lg:ml-[240px]
          2xl:ml-[270px]
        "
      >
        <Hero />

        <About />
      </main>
    </>
  );
}

export default App;
