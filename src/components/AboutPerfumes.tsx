import React from "react";
import perfume from "../assets/perfume.png";
import hidratante from "../assets/hidratante.png";
import aromatizantes from "../assets/aromatizantes.jpg";
import kitPresente from "../assets/kitPresente.jpg";

function AboutPerfumes() {
  const products = [
    { src: perfume, label1: "Perfumes", label2: "Artesanais" },
    { src: hidratante, label1: "Cremes", label2: "Hidratantes" },
    { src: aromatizantes, label1: "Aromatizantes", label2: "de Ambiente" },
    { src: kitPresente, label1: "Kit", label2: "Presente" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-[rgb(253,246,238)] p-4 sm:p-5 lg:p-10 gap-4 sm:gap-5">
        <div className="flex-1 max-w-[300px] sm:max-w-[560px]">
          <img
            src={perfume}
            alt="Perfume"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1 w-full max-w-[400px] sm:max-w-[650px] text-[rgb(200,140,110)] font-questrial leading-relaxed text-[16px] sm:text-[20px] md:text-[18px]">
          <h1 className="font-light mb-5 sm:mb-10 text-[40px] sm:text-[64px] md:text-[73px]">
            Sobre os Perfumes
          </h1>
          <p className="italic font-open-sans mb-3 sm:mb-5 leading-tight text-[20px] sm:text-[32px] md:text-[30px]">
            Mais do que uma simples fragrância; é uma experiência sensorial
            única e personalizada.
          </p>
          <p className="mb-3">
            O contrário dos perfumes produzidos em massa, os artesanais são
            criados com atenção a cada detalhe.
          </p>
          <p className="mb-3">
            Desde a seleção de ingredientes de alta qualidade até o processo de
            mistura e maturação.
          </p>
          <p className="mb-3">
            Cada perfume leva em média de 15 a 20 dias para ficar pronto devido
            a todo o processo atencioso de preparo e finalização da fragrância.
          </p>
          <p className="mb-3">
            Com esta abordagem cuidadosa resultando em uma essência que reflete
            a personalidade e os gostos de quem a usa.
          </p>
          <p className="mb-3">
            Também nos preocupamos com a sustentabilidade, escolhendo práticas e
            materiais que respeitam o meio ambiente, todas as nossas embalagens
            são feitas a mão priorizando materiais sustentáveis.
          </p>
          <p className="mb-3">
            Usar um perfume artesanal é mais do que uma escolha, é a expressão
            da sua individualidade e cuidado consigo.
          </p>
          <p>
            Para pessoas como você, que querem partilhar beleza e plantar afeto
            nos corações, buscamos ajudar a contar histórias a cada borrifada.
          </p>
        </div>
      </div>

      <div className="text-center bg-[rgb(253,246,238)] pt-5 sm:pt-10">
        <h2 className="font-light font-gfs text-[40px] sm:text-[60px] md:text-[68px] text-[rgb(200,140,110)]">
          Nossos produtos
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-5 sm:mt-10">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="border-4 border-[rgb(200,140,110)] rounded-lg p-2">
                <img
                  src={product.src}
                  alt={`${product.label1} ${product.label2}`}
                  className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] object-cover rounded-md"
                />
              </div>
              <p className="mt-2 font-open-sans font-semibold text-[rgb(200,140,110)] text-[18px] sm:text-[26px] md:text-[20px]">
                {product.label1}
                <br />
                {product.label2}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-[rgb(253,246,238)] py-5 sm:py-10">
        <button
          className="mt-3 sm:mt-5 rounded-[22px] px-6 sm:px-10 py-2 border-2 border-[rgb(200,140,110)] bg-transparent text-[rgb(200,140,110)] font-semibold text-[18px] sm:text-[24px] md:text-[20px] cursor-pointer"
          onClick={() => (window.location.href = "https://example.com")}
        >
          Compre agora
        </button>
      </div>
    </>
  );
}

export default AboutPerfumes;
