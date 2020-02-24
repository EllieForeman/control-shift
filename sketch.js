//based on code fot drawgramming https://www.beccarose.co.uk/code/drawgramming/ (this is a simplified version)

var img = [];
var imgW;
var imgH;



function preload() {
  // load images
  for (var i = 0; i < 35; i++) {
    img[i] = loadImage("imgs/" + i + ".png");
    print(i);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
   canvas.position(0,0);
    canvas.style("z-index", "-1");
  background(255, 255);
  noLoop();
  imageMode(CENTER);
  noStroke();
  imageSnap();
    
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
      imageSnap();
}

/////////////////////////////
//function to make imaages //
/////////////////////////////

function imageSnap() {
  
  background(248, 242, 201);
  //image randoms
  var rand1 = ~~random(35);
  var rand2 = ~~random(35);
  var rand3 = ~~random(35);
    



  //display images

push(); // Start a new drawing state
translate((width / 2) - 300, (height / 2));
rotate(rand1);
  tint(0, 153, 204, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand3], 0, 0, imgW, imgH);
    pop(); // Restore original state
    
  push(); // Start a new drawing state
translate(width / 2, (height / 2) - 10);
rotate(rand2);
    tint(255, 255, 0, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand2], 0, 0, imgW, imgH);
 
       pop(); // Restore original state
    
  push(); // Start a new drawing state
translate((width / 2) + 300, (height / 2) + 30);
rotate(rand3);
    tint(7, 221, 153, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand1],0 , 0, imgW, imgH);

       pop(); // Restore original state
  
}
