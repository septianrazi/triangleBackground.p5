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
  // load18()
  // load17()
  // load16()
  // load15()
  // load14()
  // load13()
  // load12()
  // load11()
  // load10()
  // load9()
  // load8()
  // load7()
  // load6()
  // load5()
  // load4()
  // load3()
  // load2()
  // load1()


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
  push()
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
  pop()
}

// WINDMEEL
function load18() {
  push()

  let change = loadingSize * (tan(cos(((frameCount/30)))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  stroke(1)
  strokeWeight(5)

  fill(loadingColour)
  rotate(frameCount/4)
  line(-change, 0, change, 0)
  
  //circle(change, 0, 50)

  bgOpacity = 50
  
  pop()
}

//CIRCLE SPIRAL LOADING CIRCLE
function load17() {
  push()

  let change = loadingSize * (cos(((frameCount/30))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  noStroke()

  fill(loadingColour)
  rotate(frameCount/4)
  circle(-change, 0, 50)
  circle(change, 0, 50)

  bgOpacity = 50
  
  pop()
}

//CIRCLE SPIRAL LOADING TAN
function load16() {
  push()

  let change = loadingSize * (1/tan(((frameCount/30))))
  //line(-loadingSize+change,0,loadingSize-change,0)
  noStroke()

  fill(loadingColour)
  rotate(frameCount/3)
  circle(-change, 0, 50,)
  circle(change, 0, 50)

  bgOpacity = 37
  
  pop()
}

//SQUARE HORIZONTAL SPIN
function load15() {
  push()

  let change = loadingSize * sin(frameCount/20)

  fill(loadingColour)
  translate(-change, 0)
  rotate(frameCount/15)
  rect(0, 0, 50, 50)
  bgOpacity = 80
  translate(0, 0)
  
  pop()
}

//CONSISTENT PENDULUM SLOW
function load13() {
  push()

  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * cos((frameCount+ i*5)/(20))
    circle(c, 0, 50+i*2)
  } 
  
  pop()
}

//PENDULUM
function load12() {
  push()

  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * sin(frameCount/(20+i))
    circle(c, 0, 50-i*2)
  } 
  
  pop()
}

//CONSISTENT PENDULUM
function load11() {
  push()

  noStroke()
  fill(loadingColour,150)
  for (i = 0; i < 7; i++) {
    let c = loadingSize * cos((frameCount+ i*8)/(20))
    circle(c, 0, 50+i*2)
  }
  
  pop()
}

//CIRCLE STOP LIGHT
function load10() {
  push()

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

  pop()
}

//CIRCLE SPIRAL LOADING
function load14() {
  push()

  noStroke();
  let change = loadingSize * sin(frameCount/20)
  bgOpacity = 50;
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour)
  rotate(frameCount/15)
  circle(-change, 0, loadingSize*0.65-change/7)
  circle(change, 0, loadingSize*0.65-change/7)

  pop()
}

//SQUARE SPIRAL LOADING
function load9() {
  push()

  let change = loadingSize * sin(frameCount/20)
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour)
  rotate(frameCount/15)
  rect(-change, 0, 50-change/10,50-change/10)
  rect(change, 0, 50-change/10,50-change/10)

  pop()
}

//SQUARE PASS THROUGH 
function load8() {
  push()

  let change = loadingSize * sin(frameCount/20)
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour,215)
  rect(-change, 0, 50-change/10,50-change/10)
  rect(change, 0, 50-change/10,50-change/10)

  pop()
}

//SIN STRAIGHT LINE
function load7() {
  push()

  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize+change,0,loadingSize-change,0)
  
  pop()
}

//SIN STRAIGHT LINE
function load6() {
  push()

  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize+change,0,loadingSize-change,0)
  
  pop()
}

//SIN STRAIGHT LINE BOUNCE
function load5() {
  push()

  strokeWeight(5)
  let change = loadingSize * sin(frameCount/20)
  line(-loadingSize/2+change,0,loadingSize/2-change,0)
  
  pop()
}

//DOUBLE LINE
function load4() {
  push()

  strokeWeight(5)
  rotate(frameCount/20);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)
  
  strokeWeight(5)
  rotate(frameCount/30);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)

  pop()
}

//SIMPLE LINE
function load3() {
  push()

  strokeWeight(5)
  rotate(frameCount/12);
 
  line(-loadingSize,-loadingSize,loadingSize,loadingSize)
  pop()
}

//SIMPLE TRIANGLE (NOT FINISHED - need to maKE EQUILATERAL)
function load2() {
  push()

  noStroke();
  rotate(frameCount/12);
  let x1 = 0
  let y1 = 0 - loadingSize/2

  let x2 = 0 - loadingSize/2
  let y2 = loadingSize/2

  let x3 = loadingSize/2
  let y3 = loadingSize/2

  triangle(x1,y1,x2,y2,x3,y3);
  pop()
}

// SIMPLE SQUARE
function load1() {
  push()

  noStroke()
  rotate(frameCount/12);
  rect(0,0, 70,70);
  
  pop()
}

// Function meme
// function loadN(speed) {
//   push()
  
//   pop()
// }


