import { useEffect, useState } from "react";

function Home() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    setLogoVisible(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d3986b",
      }}
    >
      <img
        src="https://adrianaparfumes.my.canva.site/adriana-perfumes/_assets/media/ed9f925870800b61dcbfe59fa36dd617.png"
        alt="Company Logo"
        style={{
          marginTop: "-50px",
          marginBottom: "-76px",
          height: "auto",
          width: "330px",
          //animacao
          transform: logoVisible ? "translateY(0)" : "translateY(50px)",
          opacity: logoVisible ? 1 : 0,
          transition: "transform 1s ease, opacity 1s ease",
        }}
      />
      <h1
        style={{
          marginTop: "0px",
          color: "white",
          fontFamily: "Forum, sans-serif",
          fontSize: "98px",
          textAlign: "center",
          fontWeight: "200",
          letterSpacing: "2px",
        }}
      >
        <span>Adriana</span>
        <br />
        <span>Perfumes</span>
      </h1>
      <h2
        style={{
          color: "white",
          letterSpacing: "5px",
          fontSize: "35px",
          fontWeight: "370",
          transform: "scaleY(0.9)",
          transformOrigin: "center",
        }}
      >
        ARTESANAIS
      </h2>
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
    </div>
  );
}

export default Home;

export {};
