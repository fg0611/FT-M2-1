import React from "react";
import Card from "./Card";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 240px)",
        gap: "1rem",
        width: 'fit-content',
        margin: '0 auto'
      }}
    >
      {cities.map((city, i) => (
        <Card
          key={i}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );
}
