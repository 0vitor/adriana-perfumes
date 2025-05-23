import React from "react";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const header = document.querySelector("header");
    if (section && header) {
      const headerHeight = header.offsetHeight;
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="flex justify-end items-center px-[10px] sm:px-[20px] py-[10px] sm:py-[16px] bg-[rgb(253,246,238)] sticky top-0 z-[1000]">
      <nav className="flex gap-[10px] sm:gap-[20px]">
        {["inicio", "catalogo", "loja-virtual", "sobre-perfumes"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="bg-none border-none text-black text-[12px] sm:text-[16px] italic font-bold cursor-pointer"
          >
            {id.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
