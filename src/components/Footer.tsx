import React from "react";
import * as AiIcons from "react-icons/ai";

function Footer() {
  const { AiFillInstagram } = AiIcons as {
    AiFillInstagram: React.ComponentType<{ size?: number }>;
  };
  return (
    <footer
      className="Footer"
      style={{
        backgroundColor: "#d3986b",
        textAlign: "center",
        margin: "0px",
        color: "#fff",
      }}
    >
      <img
        src="/divisor.svg"
        alt="Divisor gráfico"
        style={{
          marginTop: "20px",
          width: "550px",
          paddingBottom: "20px",
          height: "auto",
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)",
        }}
      />
      <h2
        style={{
          fontSize: "100px",
          fontWeight: 400,
          marginBottom: "18px",
          fontFamily: "Forum",
        }}
      >
        Obrigada pela visita!
      </h2>
      <p
        style={{
          fontSize: "30px",
          fontWeight: 400,
          fontFamily: "Assistant",
          letterSpacing: "2px",
        }}
      >
        CONFIRA NOSSO INSTAGRAM PARA
      </p>
      <p
        style={{
          fontSize: "30px",
          fontWeight: 400,
          fontFamily: "Assistant",
          letterSpacing: "2px",
        }}
      >
        PROMOÇÕES ESPECIAIS
      </p>
      <span
        style={{
          color: "#fff",
          gap: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AiFillInstagram size={74} />
      </span>
      <p>© 2023 Perfume Store. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
