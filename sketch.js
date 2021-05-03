var bullet,wall;
var speed,weight,damage,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  thickness = random(22,83);
  wall = createSprite(1400,200,thickness,height/2); 
  wall.shapeColor = color(80, 80, 80);
  speed = random(22.3,32.1);
  weight = random(30,52);
  
  bullet.velocityX = speed;
  damage =0.5* weight*speed*speed*100/thickness*thickness*thickness
  console.log(damage);
}

function draw() {
  background(255,255,255);  
  
  if(bullet.x-wall.x < bullet.width/2+wall.width/2 && wall.x-bullet.x < wall.width/2+bullet.width/2){
    if (damage>10){
     bullet.shapeColor = color(230, 230, 0); 
    }
    else if(10<damage){
      bullet.shapeColor = color(0,255,0);  
    }
    
  }
  drawSprites();
}