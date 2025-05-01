import React, { useEffect, useState } from "react";

function Catalog() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);

  const color = "rgb(200, 140, 110)";
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
    <div
      className="Catalog"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
          backgroundSize: "auto",
          backgroundPosition: "center",
          opacity: 0.25,
          zIndex: -1,
        }}
      />
      <h1
        style={{
          fontFamily: "'Magnolia Script', sans-serif",
          lineHeight: "1.2",
          fontSize: "60px",
          color,
          paddingTop: "40px",
          fontWeight: "500",
          //animation
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <p>Catálogo de</p>
        <p>Fragrâncias</p>
      </h1>
      <table
        style={{
          width: "auto",
          margin: "20px auto",
          textAlign: "left",
          fontSize: "18px",
          borderCollapse: "collapse",
          //animation
          opacity: tableVisible ? 1 : 0,
          transform: tableVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "rgb(211, 152, 107)",
              fontFamily: "karma",
            }}
          >
            <th
              style={{
                color: "white",
                padding: "0px 20px 0px 10px",
                transform: "scaleY(0.9)",
                letterSpacing: "1px",
                fontSize: "1em",
              }}
            >
              FEMININOS
            </th>
            <th
              style={{
                color: "white",
                padding: "5px 20px 5px 10px",
                transform: "scaleY(0.9)",
                letterSpacing: "1px",
                fontSize: "20px",
              }}
            >
              MASCULINOS
            </th>
          </tr>
        </thead>
        <tbody>
          {femininePerfumes.map((feminine, index) => {
            const backgroundColor =
              index % 2 === 0
                ? "rgb(255, 255, 255, 0.09)"
                : "rgb(200, 140, 110, 0.09)";

            return (
              <tr
                key={index}
                style={{
                  color,
                  fontSize: "20px",
                }}
              >
                <td
                  style={{
                    padding: "5px 70px 5px 10px",
                    backgroundColor,
                  }}
                >
                  {feminine}
                </td>
                <td
                  style={{
                    padding: "10px",
                    backgroundColor,
                  }}
                >
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
