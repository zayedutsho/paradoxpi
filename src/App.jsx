import { useState } from "react";

import DesktopSidebar from "./comp/layout/DesktopSidebar";
import MobileDrawer from "./comp/layout/MobileDrawer";
import MobileNavbar from "./comp/layout/MobileNavbar";
import Hero from "./comp/sections/hero/Hero.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopSidebar />

      <MobileNavbar setOpen={setOpen} />

      <MobileDrawer open={open} setOpen={setOpen} />

      <main className="lg:ml-[270px]">
        {/* Hero Section Next */}

        <Hero />
      </main>
    </>
  );
}

export default App;
