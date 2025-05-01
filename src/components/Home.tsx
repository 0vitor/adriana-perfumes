import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import divisor from "../assets/divisor.svg";

function Home() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    setLogoVisible(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#d3986b]">
      <img
        src={logo}
        alt="Company Logo"
        className={`mt-[50px] mb-[-76px] h-auto w-[330px] transition-transform transition-opacity duration-1000 ease-in-out ${
          logoVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[50px] opacity-0"
        }`}
      />
      <h1 className="mt-0 text-white font-forum text-[98px] text-center font-light tracking-[2px]">
        <span>Adriana</span>
        <br />
        <span>Perfumes</span>
      </h1>
      <h2 className="text-white tracking-[5px] text-[35px] font-[370] scale-y-[0.9] origin-center">
        ARTESANAIS
      </h2>
      <img
        src={divisor}
        alt="Divisor gráfico"
        className="mt-[20px] w-[550px] pb-[20px] h-auto filter invert"
      />
    </div>
  );
}

export default Home;

export {};
