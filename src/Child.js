import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  const randomColor = getRandomColor();

  return (
  <div className="child" 
  style={{ backgroundColor: "#FFF" }}
  onClick={()  => onChangeColor(randomColor)} />
  );
}

export default Child;
