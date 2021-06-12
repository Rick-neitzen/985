var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 60;
var rover_height= 30;
var background_image = "racetrack.jpeg";
var rover_image = "rover.png";
var rover2_image = "car2.png";
var rover_x = 10;
var rover_y = 10;
var car_y = 40;
var car_x = 10;
var car_height = 30;
var car_width = 60;

function add() {
     background_IMGtag = new Image();
     background_IMGtag.onload = uploadBackground;
     background_IMGtag.src = background_image;

      rover_IMGtag = new Image();
     rover_IMGtag.onload = uploadrover;
     rover_IMGtag.src = rover_image;

     Car_IMGtag = new Image();
     Car_IMGtag.onload = uploadrover2;
     Car_IMGtag.src = rover2_image;
}

function uploadBackground() {
    ctx.drawImage(background_IMGtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_IMGtag, rover_x, rover_y, rover_width, rover_height);
}

function uploadrover2() {
    ctx.drawImage(Car_IMGtag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
window.addEventListener("keydown", my_keydown2);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }

    }
    

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y =rover_y+ 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();

   }
}

function my_keydown2 (e) {
    if(keyPressed == '87')
   {
       up2();
       console.log("up");
   }
   if(keyPressed == '83')
   {
       down2();
       console.log("down");
   }
   if(keyPressed == '65')
   {
       left2();
       console.log("left");
   }
   if(keyPressed == '68')
   {
       right2();
       console.log("right");
   }
}

function up2()
{
if(car_y >=0)
{
   car_y = car_y - 10;
   console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
    uploadBackground();
    uploadrover2();
    uploadrover();
}
}
function down2()
{
if(car_y <=500)
{
   car_y =car_y+ 10;
   console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
   uploadBackground();
    uploadrover2();
    uploadrover();
}
}
function left2()
{
if(car_x >= 0)
{
   car_x =car_x - 10;
   console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
   uploadBackground();
    uploadrover2();
    uploadrover();
}
}
function right2()
{
    if(car_x <= 700)
{
   car_x =car_x + 10;
   console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
   uploadBackground();
   uploadrover2();
   uploadrover();
}
}
