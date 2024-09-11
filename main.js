// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(80, 260, 460, 80, "fill");

// Filled Triangle for Hair
triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400, "fill");

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");

// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill");

// Rectangle for Mouth
rect(200, 350, 200, 60, "fill");

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);
ctx.stroke();

// First Vertical Line for Teeth
line(250, 350, 250, 410);
ctx.stroke();

// Second Vertical Line for Teeth
line(300, 350, 300, 410);
ctx.stroke();

// Third Vertical Line for Teeth
line(350, 350, 350, 410);
ctx.stroke();

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, "fill");

// Filled Circle for Right Eye
circle(400, 250, 10, "fill");

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
ctx.lineWidth = 2;
line(150, 180, 250, 180);
ctx.stroke();

// Line for Right Eyebrow
line(350, 160, 450, 180);
ctx.stroke();

// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320, "stroke");

//face
ctx.strokeStyle = "rgb(100, 100, 100)";
face(200, 450, 400, 450, 480, 320, 480, 120, 120, 120, 120, 320, 200, 450);
ctx.stroke();

//hair
ctx.fillStyle = "rgb(120, 100, 110)";
hair(600, 80, 100, 175, 20, 200, 100, 80, 170, 150, 70, 70, "fill");

// tie
ctx.fillStyle = "rgb(150, 100, 100)";
tie(300, 540, 240, 670, 350, 640, 300, 540, 25, "fill");
// triangle(300, 540, 240, 670, 350, 640, "fill");
// circle(300, 540, 30, "fill");

function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }
}

function rect(x, y, w, h, type) {
  ctx.fillRect(x, y, w, h, type);
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }
}

function line(x1, y1, x2, y2, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
}

function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }
}

function face(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(x6, y6);
  ctx.lineTo(x7, y7);
}

function hair(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(x6, y6);
  ctx.closePath();
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }
}

function tie(x1, y1, x2, y2, x3, y3, x4, y4, r, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(x4, y4, r, 0, 2 * Math.PI);
  if (type === "stroke") {
    ctx.stroke();
  } else if (type === "fill") {
    ctx.fill();
  }
}
