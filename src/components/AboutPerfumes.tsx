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
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[rgb(253,246,238)] p-5 lg:p-10">
        <div className="flex-1 text-center">
          <img
            src={perfume}
            alt="Perfume"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1 text-[rgb(200,140,110)] text-lg lg:text-xl font-questrial leading-relaxed lg:ml-5">
          <h1 className="text-[73px] font-light mb-5">Sobre os Perfumes</h1>
          <p className="text-[31px] italic font-open-sans mb-5">
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
      <div className="text-center bg-[rgb(253,246,238)] pt-10">
        <h2 className="text-[68px] font-light font-gfs text-[rgb(200,140,110)]">
          Nossos produtos
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="border-4 border-[rgb(200,140,110)] rounded-lg p-2">
                <img
                  src={product.src}
                  alt={`${product.label1} ${product.label2}`}
                  className="w-[200px] h-[200px] object-cover rounded-md"
                />
              </div>
              <p className="mt-2 font-open-sans text-lg font-semibold text-[rgb(200,140,110)]">
                {product.label1}
                <br />
                {product.label2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center bg-[rgb(253,246,238)] py-10">
        <button
          className="mt-5 rounded-[22px] px-10 py-2 text-[rgb(200,140,110)] border-2 border-[rgb(200,140,110)] bg-transparent text-lg cursor-pointer"
          onClick={() => (window.location.href = "https://example.com")}
        >
          Compre agora
        </button>
      </div>
    </>
  );
}

export default AboutPerfumes;
