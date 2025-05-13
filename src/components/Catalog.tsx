import React, { useEffect, useState } from "react";
import background from "../assets/background.png";

function Catalog() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);

  const femininePerfumes = [
    "212 Vip Rosé",
    "Flower By Kenzo",
    "Fantasy",
    "Euphoria",
    "J´adore",
    "Lady Million",
    "Scandal By Night",
    "Dolce Gabana",
    "Good Girl",
    "Lavi este Bele",
  ];
  const masculinePerfumes = [
    "212 Vip man black",
    "Ferrari Black",
    "Malbec Absoluto",
    "CK One",
    "Hugo Boss Batheal",
    "1 milion",
    "Blue Seduction",
  ];

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 500); // Delay for title animation
    setTimeout(() => setTableVisible(true), 1000); // Delay for table animation
  }, []);

  return (
    <div className="relative overflow-hidden px-4 sm:px-8">
      <div
        className="absolute inset-0 bg-center bg-auto opacity-25 z-[-1]"
        style={{ backgroundImage: `url(${background})` }}
      />
      <h1
        className={`font-[Magnolia Script] leading-[1.2] text-[40px] sm:text-[60px] text-[rgb(200,140,110)] pt-[20px] sm:pt-[40px] font-magnolia transition-opacity transition-transform duration-500 ease-in-out ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5"
        }`}
      >
        <p>Catálogo de</p>
        <p>Fragrâncias</p>
      </h1>
      <table
        className={`w-full sm:w-auto mx-auto my-[10px] sm:my-[20px] text-left text-[14px] sm:text-[18px] border-collapse transition-opacity transition-transform duration-1000 ease-in-out ${
          tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <thead>
          <tr className="bg-[rgb(211,152,107)] font-karma">
            <th className="text-white px-[10px] py-0 scale-y-[0.9] tracking-[1px] text-[1em]">
              FEMININOS
            </th>
            <th className="text-white px-[10px] py-[5px] scale-y-[0.9] tracking-[1px] text-[20px]">
              MASCULINOS
            </th>
          </tr>
        </thead>
        <tbody>
          {femininePerfumes.map((feminine, index) => {
            const backgroundColor =
              index % 2 === 0
                ? "bg-[rgba(255,255,255,0.09)]"
                : "bg-[rgba(200,140,110,0.09)]";

            return (
              <tr key={index} className={`text-[rgb(200,140,110)] text-[20px]`}>
                <td className={`px-[10px] py-[5px] ${backgroundColor}`}>
                  {feminine}
                </td>
                <td className={`px-[10px] py-[5px] ${backgroundColor}`}>
                  {masculinePerfumes[index] || ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Catalog;
