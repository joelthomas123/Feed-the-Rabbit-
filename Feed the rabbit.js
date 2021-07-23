var garden,rabbit,apple,orange,red;
var gardenImg,rabbitImg,appleImg,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);

  //boy moving on mouse position
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0){
  if(select_sprites == 1){
    createApples();
  } else if (select_sprites == 2){
    createOranges();
  } else{
    createRed();
  } 
}

}

function createApples(){
  appleImg = createSprite(random(50,350),40,10,10)
  appleImg.addImage(appleImg);
  appleImg.scale=0.07;
  appleImg.velocityY = 3;
  appleImg.lifetime = 200;
}

function createOranges(){
  orangeImg = createSprite(random(50,350),40,10,10)
  orangeImg.addImage(orangeImg);
  orangeImg.scale=0.08;
  orangeImg.velocityY = 3;
  orangeImg.lifetime = 200;
}

function createRed(){
  redImg = createSprite(random(50,350),40,10,10)
  redImg.addImage(redImg);
  redImg.scale=0.06;
  redImg.velocityY = 3;
  redImg.lifetime = 200;
}
//spawn objects
spawnApples();
spawnOranges();
spawnRed();
drawSprites();

spawnapples
function spawnApples(){
  if(frameCount % 60 === 0){
    appleImg = createSprite(600,100,40,10);
    appleImg.addImage(appleImg)
    appleImg.y = Math.round(random(10,60))
    appleImg.scale = 0.7
    appleImg.velocityY = -3;
  }
}

spawnoranges
function spawnOranges(){
  if(frameCount % 60 === 0){
    orangeImg = createSprite(600,100,40,10);
   orangeImg.addImage(appleImg)
    orangeImg.y = Math.round(random(10,60))
    orangeImg.scale = 0.7
    orangeImg.velocityY = -3;
  }
}

spawnred
function spawnRed(){
  if(frameCount % 60 === 0){
   redImg  = createSprite(600,100,40,10);
    redImg.addImage(appleImg)
    redImg.y = Math.round(random(10,60))
    redImg.scale = 0.7
    redImg.velocityY = -3;
  }
}

score = score + 5
drawSprites();
