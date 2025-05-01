import React from "react";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-end items-center px-[20px] py-[16px] bg-[rgb(253,246,238)] sticky top-0 z-[1000]">
      <nav className="flex gap-[20px]">
        {["inicio", "catalogo", "loja-virtual", "sobre-perfumes"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="bg-none border-none text-black text-[16px] italic font-bold cursor-pointer"
          >
            {id.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
