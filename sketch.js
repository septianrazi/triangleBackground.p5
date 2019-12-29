var coords =  [];
var xLength = 70;
var yLength = 45;
//variables used to show squares size based on previous variables.
var squareWidth;
var squareHeight;

function setup() {
  // create the canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  background(255,255,255);

   // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  
  //variables used to show squares size based on previous variables.
  squareWidth = width/xLength;
  squareHeight = height/yLength;
}

function draw() {
  // variables for how many pixels wanted
  background(255,20);
  noStroke();

  // for loop to colour in pixels for name and >
  for (cor = 0 ; cor <coords.length; cor++){
    fill(18,(40 % coords[cor][2]),40, 20);    
    triangle(0+(coords[cor][0])*squareWidth, 0+(coords[cor][1]-1)*squareHeight,
    0+((coords[cor][0])*squareWidth) + squareWidth, 0+(coords[cor][1]-1)*squareHeight,
    (0+(coords[cor][0])*squareWidth+squareWidth), (coords[cor][1]-1)*squareHeight+squareHeight);
  }
}

function mouseMoved(){
    x = Math.round(mouseX/squareWidth)
    y = Math.round(mouseY/squareHeight)

  coords.push([x,y])

  iterations= randomGaussian(10,5);

  if ((mouseX % squareWidth) < 2){
    coords = [[x,y]];
    for (i = 0; i < iterations; i++){
      minX = Math.round(randomGaussian(0, 1));
      minY = Math.round(randomGaussian(0, 1));
      col = Math.round(random(150,190));

      console.log(minX)
      coords.push([x+minX, y+minY, col])

      minX = Math.round(randomGaussian(0, 2));
      minY = Math.round(randomGaussian(0, 2));
      col = Math.round(random(30,70));

      console.log(minX)
      coords.push([x+minX, y+minY, col])

      minX = Math.round(randomGaussian(0, 3));
      minY = Math.round(randomGaussian(0, 3));
      col = Math.round(random(0,20));

      console.log(minX)
      coords.push([x+minX, y+minY, col])
    }

  }
  
}