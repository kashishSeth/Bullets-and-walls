
var bullet,bullet2,bullet3,wall,wall2,wall3;
var thickness,speed,weight;



function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor = "White";
  
  bullet2 = createSprite(50,100,20,20);
  bullet2.shapeColor = "Red";
  
  bullet3 = createSprite(50,300,20,20);
  bullet3.shapeColor = "Blue";
  
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = "Grey";

  wall2 = createSprite(1400,50,thickness,height/2);
  wall2.shapeColor = "Grey";

  wall3 = createSprite(1400,350,thickness,height/2);
  wall3.shapeColor = "Grey";

  thickness = random(22,83);   
  speed = random(223,321);
  weight = random(30,52);
    
  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
 
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(Damage > 10) {
    wall.shapeColor = "Pink"
    }
    if(Damage < 10) {
    wall.shapeColor = "Purple"
    } 
    }

  if(hasCollided(bullet2,wall2)){
  bullet2.velocityX = 0;
  Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  if(Damage > 10) {
  wall2.shapeColor = "Red"
  }
  if(Damage < 10) {
  wall2.shapeColor = "Green"
  } 
  }

  if(hasCollided(bullet3,wall3)){
    bullet3.velocityX = 0;
    Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(Damage > 10) {
    wall3.shapeColor = "Blue"
    }
    if(Damage < 10) {
    wall3.shapeColor = "Yellow"
    } 
    }

  drawSprites();
}

function hasCollided(bullet,wall) {

   bulletrightEdge = bullet.x+bullet.width
   wallleftEdge = wall.x
   if(bulletrightEdge >= wallleftEdge)
   {
     return true;
   } 
   else
   {
     return false;
   }
}