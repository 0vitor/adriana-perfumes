import React from "react";

function AboutPerfumes() {
  const imageSize = "200px";
  const products = [
    { src: "/perfume.png", label1: "Perfumes", label2: "Artesanais" },
    { src: "/hidratante.png", label1: "Cremes", label2: "Hidratantes" },
    {
      src: "/aromatizantes.jpg",
      label1: "Aromatizantes",
      label2: "de Ambiente",
    },
    { src: "/kitPresente.jpg", label1: "Kit", label2: "Presente" },
  ];

  const imageContainerStyle = {
    border: "3px solid rgb(200, 140, 110)",
    borderRadius: "15px",
    display: "inline-block",
    padding: "5px",
    overflow: "hidden",
  };

  const imageStyle: React.CSSProperties = {
    width: imageSize,
    height: imageSize,
    borderRadius: "10px",
    objectFit: "cover",
  };

  const labelStyle = {
    marginTop: "10px",
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontWeight: "600",
    color: "rgb(200, 140, 110)",
  };

  return (
    <>
      <div
        className="AboutPerfumes"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(253, 246, 238)",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="/perfume.png"
            alt="Perfume"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            marginRight: "20px",
            color: "rgb(200, 140, 110)",
            fontSize: "21px",
            fontFamily: "Questrial",
            lineHeight: "1.3",
          }}
        >
          <h1 style={{ fontSize: "73px", fontWeight: "400" }}>
            Sobre os Perfumes
          </h1>
          <br />
          <p
            style={{
              fontSize: "31px",
              fontStyle: "italic",
              fontFamily: "Open Sans",
            }}
          >
            Mais do que uma simples fragrância; é uma experiência sensorial
            única e personalizada.
          </p>
          <br />
          <p>
            O contrário dos perfumes produzidos em massa, os artesanais são
            criados com atenção a cada detalhe.
          </p>
          <p>
            Desde a seleção de ingredientes de alta qualidade até o processo de
            mistura e maturação.
          </p>
          <br />
          <p>
            Cada perfume leva em média de 15 a 20 dias para ficar pronto devido
            a todo o processo atencioso de preparo e finalização da fragrância.
          </p>
          <p>
            Com esta abordagem cuidadosa resultando em uma essência que reflete
            a personalidade e os gostos de quem a usa.
          </p>
          <br />
          <p>
            Também nos preocupamos com a sustentabilidade, escolhendo práticas e
            materiais que respeitam o meio ambiente, todas as nossas embalagens
            são feitas a mão priorizando materiais sustentáveis.
          </p>
          <br />
          <p>
            Usar um perfume artesanal é mais do que uma escolha, é a expressão
            da sua individualidade e cuidado consigo.
          </p>
          <p>
            Para pessoas como você, que querem partilhar beleza e plantar afeto
            nos corações, buscamos ajudar a contar histórias a cada borrifada.
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "70px",
          backgroundColor: "rgb(253, 246, 238)",
        }}
      >
        <h2
          style={{
            fontSize: "68px",
            fontWeight: "400",
            fontFamily: "GFS Artemisia",
            color: "rgb(200, 140, 110)",
          }}
        >
          Nossos produtos
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "70px",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={imageContainerStyle}>
                <img
                  src={product.src}
                  alt={`${product.label1} ${product.label2}`}
                  style={imageStyle}
                />
              </div>
              <p style={labelStyle}>
                {product.label1}
                <br />
                {product.label2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "35px 0px 70px 0px",
          backgroundColor: "rgb(253, 246, 238)",
        }}
      >
        <button
          style={{
            marginTop: "40px",
            borderRadius: "22px",
            padding: "10px 40px",
            color: "rgb(200, 140, 110)",
            border: "2px solid rgb(200, 140, 110)",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "22px",
          }}
          onClick={() => (window.location.href = "https://example.com")}
        >
          Compre agora
        </button>
      </div>
    </>
  );
}

export default AboutPerfumes;
