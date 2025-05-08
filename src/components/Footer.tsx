import React from "react";
import * as AiIcons from "react-icons/ai";
import divisor from "../assets/divisor.svg";

function Footer() {
  const { AiFillInstagram } = AiIcons as {
    AiFillInstagram: React.ComponentType<{ size?: number }>;
  };

  return (
    <footer className="bg-[#d3986b] text-center text-white m-0">
      <img
        src={divisor}
        alt="Divisor gráfico"
        className="pt-[20px] w-[550px] pb-[20px] h-auto filter invert mx-auto"
      />
      <h2 className="text-[100px] font-light font-forum">
        Obrigada pela visita!
      </h2>
      <p className="text-[30px] font-light font-assistant tracking-[6px]">
        CONFIRA NOSSO INSTAGRAM PARA
      </p>
      <p className="text-[30px] font-light font-assistant tracking-[6px]">
        PROMOÇÕES ESPECIAIS
      </p>
      <span className="text-white gap-[10px] flex justify-center">
        <AiFillInstagram size={74} />
      </span>
      <p>© 2023 Perfume Store. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
