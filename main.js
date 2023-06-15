//Simple Paint

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColour = "black";

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  //Draw a circle if mouseIsPressed
  if (mouseIsPressed) {
    ctx.strokeStyle = penColour;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  requestAnimationFrame(loop);
}

//Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
  console.log(event);
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  //Save previous mouse x and y
  pmouseX = mouseX;
  pmouseY = mouseY;

  //Update mouse x and y
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
  if (event.code == "Space") {
    //Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  } else if (event.code == "Digit1") {
    penColour = "red";
  } else if (event.code == "Digit2") {
    penColour = "green";
  } else if (event.code == "Digit3") {
    penColour = "blue";
  }
}

//Color Events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("colourPicker").addEventListener("change", changeColor);

function setRed() {
  penColour = "red";
}

function setGreen() {
  penColour = "green";
}

function setBlue() {
  penColour = "blue";
}

function changeColor() {
  penColour = document.getElementById("colourPicker").value;
}
