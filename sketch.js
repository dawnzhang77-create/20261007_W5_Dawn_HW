let x,y,d,xDir,yDir,speed;
let img1,img2,img3;
let picNum;

function preload(){
    img1 = loadImage('img1.PNG');
    img2 = loadImage('img2.PNG');
    img3 = loadImage('img3.PNG');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

    x = random(width);
    y = random(height);
    d = 100;
    xDir = random(-2,2);
    yDir = random(-2,2);
    speed = random(1,10);
    picNum = 1;
}

function draw(){
    background(0);

    if(picNum == 1){
        image(img1,x,y,d,d);
    }
    if(picNum == 2){
        image(img2,x,y,d,d);
    }
    if(picNum == 3){
        image(img3,x,y,d,d);
    }

    y += yDir * speed;
    x += xDir * speed;

    keepInCanvas();
}

function keepInCanvas(){
    if((x > width) || (x<0)) 
    {
        changePic();
        xDir = -xDir;
    }

    if ((y>height) || (y<0))
    {
        changePic();
        yDir = -yDir;
    }
}

function changePic(){
    picNum = picNum + 1;

    if(picNum > 3){
        picNum = 1;
    }
}