import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import divisor from "../assets/divisor.svg";

function Home() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    setLogoVisible(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#d3986b] px-4 sm:px-8">
      <img
        src={logo}
        alt="Company Logo"
        className={`transition-transform transition-opacity duration-1000 ease-in-out
          ${
            logoVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[50px] opacity-0"
          }
          mt-[-20px] sm:mt-[-30px] md:mt-[-40px]
          mb-[-40px] sm:mb-[-60px] md:mb-[-76px]
          w-[260px] sm:w-[320px] md:w-[330px]
          h-auto
        `}
      />
      <h1
        className="
          text-white font-forum font-light text-center tracking-[1px] leading-[1]
          text-[64px] sm:text-[84px] md:text-[98px]
        "
      >
        <span>Adriana</span>
        <br />
        <span>Perfumes</span>
      </h1>
      <h2
        className="
          text-white font-[370] scale-y-[0.9] origin-center tracking-[3px]
          text-[24px] sm:text-[30px] md:text-[35px]
        "
      >
        ARTESANAIS
      </h2>
      <img
        src={divisor}
        alt="Divisor gráfico"
        className="
          mt-[20px] pb-[20px] filter invert h-auto
          w-[300px] sm:w-[450px] md:w-[550px]
        "
      />
    </div>
  );
}

export default Home;
