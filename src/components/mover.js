

const Mover = (p) => {
  let rad = 10; // Width of the shape
  let xpos, ypos; // Starting position of shape

  let xspeed = 1.8; // Speed of the shape
  let yspeed = 1.2; // Speed of the shape

  let xdirection = 1; // Left or Right
  let ydirection = 1; // Top to Bottom

  p.setup = function () {
    p.createCanvas(100, 100);
    xpos = p.width / 2;
    ypos = p.height / 2;
  };
  p.draw = function () {
    p.background('#fd8b66');
    p.noStroke();
    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > p.width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > p.height - rad || ypos < rad) {
      ydirection *= -1;
    }

    // Draw the shape
    p.ellipse(xpos, ypos, rad, rad);
  };
}

export default Mover
