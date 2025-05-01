import React from "react";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "16px 20px",
        backgroundColor: "rgb(253, 246, 238)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => scrollToSection("inicio")}
          style={{
            background: "none",
            border: "none",
            color: "black",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Início
        </button>
        <button
          onClick={() => scrollToSection("catalogo")}
          style={{
            background: "none",
            border: "none",
            color: "black",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Catálogo
        </button>
        <button
          onClick={() => scrollToSection("loja-virtual")}
          style={{
            background: "none",
            border: "none",
            color: "black",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Loja Virtual
        </button>
        <button
          onClick={() => scrollToSection("sobre-perfumes")}
          style={{
            background: "none",
            border: "none",
            color: "black",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sobre Perfumes
        </button>
      </nav>
    </header>
  );
}

export default Header;
