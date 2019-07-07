var bgColour = 255
var loadingColour = 0
var bordebuttonW = 10 // border width for bleed
var buttonW = 50
var buttonH = 25
var debug = "Misc"
var blackBG = true
var loadingSize = 150 // Size of Loading animation Icon


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColour);
  rectMode(RADIUS);
  textAlign(CENTER, CENTER);
  textSize(16);
  strokeWeight(0.5);
  // Button 1
  fill(loadingColour);
  rect(windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW, buttonW, buttonH, 10);
  fill(bgColour);
  text("Colour", windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW);
  // Button 2
  fill(loadingColour);
  rect(windowWidth - 3*buttonW - 2*bordebuttonW, windowHeight - buttonH - bordebuttonW, buttonW, buttonH, 10);
  fill(bgColour);
  text(debug, windowWidth - 3*buttonW - 2*bordebuttonW, windowHeight - buttonH - bordebuttonW);
  
  fill(150);
  text('x: ' + mouseX + ' y: ' + mouseY, 100, 50);

  fill(loadingColour)
  load1();


}

//SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
function load1() {
  noStroke()
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount/12);
  let x1 = 0
  let y1 = 0 - loadingSize/2

  let x2 = 0 - loadingSize/2
  let y2 = loadingSize/2

  let x3 = loadingSize/2
  let y3 = loadingSize/2

  triangle(x1,y1,x2,y2,x3,y3);
  translate(0,0);
  rotate(0);
}

// SIMPLE SQUARE
function load2() {
  noStroke()
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount/12);
  rect(0,0, 70,70);
  translate(0,0);
  rotate(0);
}

function mousePressed() {
  // Check if mouse is inside the circle
  //rect(windowWidth - buttonW - bordebuttonW, windowHeight - buttonH - bordebuttonW
  if (mouseX > (windowWidth - 2*buttonW - bordebuttonW) && mouseX < (windowWidth - bordebuttonW)) {
    if (mouseY > (windowHeight - 2*buttonH - bordebuttonW) && mouseY < (windowHeight - bordebuttonW)) {
      changeBackground()
    }
  }
  if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < loadingSize){
    changeBackground()
  }
}

function mouseMoved() {

}

// function to change the background of colour
function changeBackground() {
  console.log("before" + blackBG)
  if (blackBG) {
    bgColour = 0;
    loadingColour = 255;
    blackBG = false
    console.log("p1")
  } else if (!blackBG){
    console.log("p2")
    bgColour = 255;
    loadingColour = 0;
    blackBG = true
  }
}


