

import React from "react"
import Sketch from "react-p5";

const Mover = () => {
  let x = 50;
  let y = 50;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(100, 100).parent(canvasParentRef);
  };
  const draw = p5 => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };
  return <Sketch setup={setup} draw={draw} />
}

export default Mover
