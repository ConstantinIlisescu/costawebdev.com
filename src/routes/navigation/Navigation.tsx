import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import Container from "@/components/ui/container";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const handleScroll = () => {
    // Clear the active item to close all accordions on scroll
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener only when an item is active (open)
    if (menuOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Clean up the scroll event listener on component unmount or when no item is active
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 py-3">
      <Container>
        <div className="flex justify-between">
          <Logo />
          <button
            aria-name="menu"
            className="flex flex-col gap-2 justify-center items-end"
            onClick={toggleMenu}
          >
            <div
              className={`w-20 h-1 bg-call-to-action rounded-xl transition-all duration-500 ease-in-out ${
                menuOpen ? "w-96 opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-16 h-1 bg-call-to-action rounded-xl transition-all duration-500 ease-in-out ${
                menuOpen ? "w-80 opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-10 h-1 bg-call-to-action rounded-xl transition-all duration-500 ease-in-out ${
                menuOpen ? "w-72 opacity-0" : ""
              }`}
            ></div>
          </button>
          <div
            className={` text-white gap-2 items-center text-xl font-semibold transition-all duration-1000 ease-in-out ${
              menuOpen ? " flex w-64" : "hidden w-0"
            }`}
          >
            <NavLinks />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
