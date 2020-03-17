

import React from "react"
import Sketch from "react-p5";

const Mover = () => {
  let rad = 6; // Width of the shape
  let xpos, ypos; // Starting position of shape

  let xspeed = 2.8; // Speed of the shape
  let yspeed = 2.2; // Speed of the shape

  let xdirection = 1; // Left or Right
  let ydirection = 1; // Top to Bottom
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(100, 100).parent(canvasParentRef);
    p5.noStroke();
    p5.frameRate(30);
    p5.ellipseMode(p5.RADIUS);
    // Set the starting position of the shape
    xpos = p5.width / 2;
    ypos = p5.height / 2;
  };
  const draw = p5 => {
    p5.background(0);
    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > p5.width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > p5.height - rad || ypos < rad) {
      ydirection *= -1;
    }

    // Draw the shape
    p5.ellipse(xpos, ypos, rad, rad);
  };
  return <Sketch setup={setup} draw={draw} />
}

export default Mover
