//based on code fot drawgramming https://www.beccarose.co.uk/code/drawgramming/ (this is a simplified version)

var imgBrand = [];
var img= [];
var imgW;
var imgH;
let picBrand = 6; // number of images to test
let picOther = 15; // number of other images



function preload() {
    // load images
    for (var i = 0; i < picBrand; i++) {
        imgBrand[i] = loadImage("imgs_brand/" + i + ".png");
        print(i);
    }
    for (var i = 0; i < picOther; i++) {
        img[i] = loadImage("imgs/" + i + ".png");
        print(i);
    }
}





function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    background(255, 255);
    noLoop();
    imageMode(CENTER);
    noStroke();
    imageSnap();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    imageSnap();
}

/////////////////////////////
//function to make imaages //
/////////////////////////////

function imageSnap() {

    background(248, 242, 201);
    //image randoms
    var randAng1 = ~~random(360);
    var randAng2 = ~~random(360);
    var randBrand = ~~random(picBrand);
    var randImg = ~~random(picOther );




    //display images

    push(); // Start a new drawing state
    translate((width / 2) - 300, (height / 2));
    rotate(randAng1);
    tint(0, 153, 204, ~~random(100, 200)); // Apply transparency without changing color
    image(img[randImg], 0, 0, imgW, imgH);
    pop(); // Restore original state

    push(); // Start a new drawing state
    translate(width / 2, (height / 2) - 10);
    rotate(randAng2);
    tint(255, 255, 0, ~~random(100, 200)); // Apply transparency without changing color
    image(imgBrand[randBrand], 0, 0, imgW, imgH);

    pop(); // Restore original state

    //  push(); // Start a new drawing state
    //translate((width / 2) + 300, (height / 2) + 30);
    //rotate(rand3);
    //    tint(7, 221, 153, ~~random(100, 200)); // Apply transparency without changing color
    //  image(img[rand1],0 , 0, imgW, imgH);
    //
    //       pop(); // Restore original state
    //  
}
