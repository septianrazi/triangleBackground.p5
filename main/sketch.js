var bgColour = 255
var loadingColour = 0
var bordebuttonW = 10 // border width for bleed
var buttonW = 50
var buttonH = 25
var debug = "Misc"
var blackBG = true
var loadingSize = 150 // Size of Loading animation Icon
var bgOpacity = 255
var loadArray = [] // Array to store different load icon animations

var sliderPosY;
var sliderPosX = 120
var sliderPosMin = 50
var sliderPosMax = 190
var sliderButtonSize = 20
var sliderFill = 150


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderPosY = windowHeight - bordebuttonW - buttonH
}

function draw() {
  background(bgColour,bgOpacity);
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
  
  fill(225)

  drawSlider(sliderPosX, sliderButtonSize, sliderPosMin, sliderPosMax,sliderFill)


  fill(loadingColour)
  translate(windowWidth/2, windowHeight/2);
  //loadArray[0]();
  //console.log(loadArray)

  load19()

  //strokeWeight(1)
}


function drawSlider(x, s, min, max, f){
  stroke(loadingColour)
  color(loadingColour)
  line(min, sliderPosY, max, sliderPosY)
  noStroke()
  fill(f)
  circle(x, sliderPosY, s)
  stroke(1)
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

  if (dist(mouseX, mouseY, sliderPosX, sliderPosY) < sliderButtonSize) {
    sliderFill = 180
  }
}

function mouseReleased() {
  sliderFill = 150
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


////////////////////////////////////////////////
// CODE FOR LOADING ANIMATIONS
////////////////////////////////////////////////

// TRIPPY WINDMEEL
function load19() {
  let change = loadingSize * ((tan(((frameCount/30)))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  stroke(loadingColour)
  strokeWeight(5)

  fill(loadingColour)
  rotate(frameCount/8)
  line(-change, 0, change, 0)

  let change2 = loadingSize * ((tan(((frameCount/15)))))
  line(0, -change2, 0, change2)
  //line(-change2, 0, change2, 0)
  //circle(change, 0, 50)

  bgOpacity = 50
  rotate(0);
}

// WINDMEEL
function load18() {
  let change = loadingSize * (tan(cos(((frameCount/30)))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  stroke(1)
  strokeWeight(5)

  fill(loadingColour)
  rotate(frameCount/4)
  line(-change, 0, change, 0)
  
  //circle(change, 0, 50)

  bgOpacity = 50
  rotate(0);
}

//CIRCLE SPIRAL LOADING CIRCLE
function load17() {
  let change = loadingSize * (cos(((frameCount/30))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  noStroke()

  fill(loadingColour)
  rotate(frameCount/4)
  circle(-change, 0, 50)
  circle(change, 0, 50)

  bgOpacity = 50
  rotate(0);
}

//CIRCLE SPIRAL LOADING TAN
function load16() {
  let change = loadingSize * (1/tan(((frameCount/30))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  noStroke()

  fill(loadingColour)
  rotate(frameCount/3)
  circle(-change, 0, 50,)
  circle(change, 0, 50)

  bgOpacity = 37
  rotate(0);
}

//SQUARE HORIZONTAL SPIN
function load15() {
  let change = loadingSize * sin(frameCount/20)

  fill(loadingColour)
  translate(-change, 0)
  rotate(frameCount/15)
  rect(0, 0, 50, 50)
  bgOpacity = 80
  translate(0, 0)
  rotate(0);
}

//CONSISTENT PENDULUM SLOW
function load13() {
  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * cos((frameCount+ i*5)/(20))
    circle(c, 0, 50+i*2)
  } 
}

//PENDULUM
function load12() {
  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * sin(frameCount/(20+i))
    circle(c, 0, 50-i*2)
  } 
}

//CONSISTENT PENDULUM
function load11() {
  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * cos((frameCount+ i*8)/(20))
    circle(c, 0, 50+i*2)
  }
}

//CIRCLE STOP LIGHT
function load10() {
  noStroke()
  let l = [255,130,130]
  var o1
  var o2
  var o3
  let fc = frameCount/30

  if ((fc % 3) < 1){
    o1 = l[0]
    o2 = l[1]
    o3 = l[2]
  } else if ((fc % 3) < 2){
    o1 = l[2]
    o2 = l[0]
    o3 = l[1]
  } else if ((fc % 3) < 3){
    o1 = l[1]
    o2 = l[2]
    o3 = l[0]
  }

  cSize = loadingSize/2
  fill(loadingColour,o1)
  circle(-loadingSize,0,cSize)
  fill(loadingColour,o2)
  circle(0,0,cSize)
  fill(loadingColour,o3)
  circle(loadingSize,0,cSize)

  rotate(0);
}

//CIRCLE SPIRAL LOADING
function load14() {
  noStroke();
  let change = loadingSize * sin(frameCount/20)
  bgOpacity = 50;
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour)
  rotate(frameCount/15)
  circle(-change, 0, loadingSize*0.65-change/7)
  circle(change, 0, loadingSize*0.65-change/7)


  rotate(0);
}

//SQUARE SPIRAL LOADING
function load9() {
  let change = loadingSize * sin(frameCount/20)
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour)
  rotate(frameCount/15)
  rect(-change, 0, 50-change/10,50-change/10)
  rect(change, 0, 50-change/10,50-change/10)

  rotate(0);
}

//SQUARE PASS THROUGH 
function load8() {
  let change = loadingSize * sin(frameCount/20)
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour,215)
  rect(-change, 0, 50-change/10,50-change/10)
  rect(change, 0, 50-change/10,50-change/10)

  rotate(0);
}

//SIN STRAIGHT LINE
function load7() {
  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize+change,0,loadingSize-change,0)
  
  rotate(0);
}

//SIN STRAIGHT LINE
function load6() {
  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize+change,0,loadingSize-change,0)
  
  rotate(0);
}

//SIN STRAIGHT LINE BOUNCE
function load5() {
  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize/2+change,0,loadingSize/2-change,0)
  
  rotate(0);
}

//DOUBLE LINE
function load4() {
  strokeWeight(5)
  rotate(frameCount/20);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)
  
  strokeWeight(5)
  rotate(frameCount/30);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)

  translate(0,0);
  rotate(0);
}

//SIMPLE LINE
function load3() {
  strokeWeight(5)
  rotate(frameCount/12);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)
  translate(0,0);
  rotate(0);
}

//SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
function load2() {
  noStroke();
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
function load1() {
  noStroke()
  rotate(frameCount/12);
  rect(0,0, 70,70);
  translate(0,0);
  rotate(0);
}


