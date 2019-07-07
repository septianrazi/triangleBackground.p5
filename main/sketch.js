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
  translate(windowWidth/2, windowHeight/2);
  load10();


}


//circle stop light 
function load10() {
  noStroke()
  let l = [255,175,100]
  var o1
  var o2
  var o3
  let fc = frameCount/30
  console.log(fc%3)

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
//SQUARE PASS THROUGH 
function load9() {
  let change = loadingSize * sin(frameCount/20)
  //line(-loadingSize+change,0,loadingSize-change,0)

  fill(loadingColour,215)
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


