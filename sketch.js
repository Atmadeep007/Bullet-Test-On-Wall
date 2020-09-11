var bullet, wall,thickness;
var speed,weight;
var damage=0;

function setup() 
{
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor='rgb(255,255,255)';

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw()
{
  background(0);  

  if(isTouching(bullet, wall))
  {
    if (damage<10)
    {
      wall.shapeColor="green";
    }
    else
    {
      wall.shapeColor="red";
    }
  }

  //bullet.debug=true;
  //wall.debug=true;

  drawSprites();

  //text(damage,50,100);
}