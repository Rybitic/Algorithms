var movingrect , fixedrect;

function setup() {
  createCanvas(800,800);
  movingrect = createSprite (100,200,50,90);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  fixedrect = createSprite(300, 400, 150, 30);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY; 

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    ){
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
  }
  else{
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }


  drawSprites();
}





















































