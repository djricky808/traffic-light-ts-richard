import { useState } from "react";

export const FunctionalTrafficLight = () => {
 
  const [lightIndex, setLightIndex] = useState(0);

   const greenLight = lightIndex === 0;
   const yellowLight = lightIndex === 1;
   const redLight = lightIndex === 2;

  const changeLight = () => {
    if (redLight) {
      setLightIndex(0);
    } else {
      setLightIndex(lightIndex + 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${redLight ? "red" : "black"}`}></div>
        <div
          className={`circle ${yellowLight  ? "yellow" : "black"}`}
        ></div>
        <div className={`circle ${greenLight  ? "green" : "black"}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          changeLight();
        }}
      >
        Next State
      </button>
    </div>
  );
};
