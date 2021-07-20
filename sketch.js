var button_red
var button_green

function setup() {
  createCanvas(400,400);


 button_red = createButton("RED");
 button_red.position(100,50);
 

 button_green = createButton("GREEN");
 button_green.position(250,50);
 


 
}

function draw() 
{
  
 if (keyIsDown(RIGHT_ARROW)) {
    background("RED");
 }

 if (keyIsDown(LEFT_ARROW)) {
  background("GREEN");
}
  drawSprites();
}




