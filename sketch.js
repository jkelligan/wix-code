var birth;
var x =0;
var y = 0;
var xSpeed = 25;
var ySpeed = 0;
var score = 0;
var foodBeenAte;
var nuFod;
var ded;
var foodParts = [];
function setup() {
  createCanvas (700,700);
  // birth = new Maxwell(350,600);
  nuFood = new Fewd();


}


function draw() {
  background(0);
  move ();
  die ();
  rect(x,y,25,25);

  // birth.move();
}
function move () {
      if (keyIsDown (RIGHT_ARROW)) {
        xSpeed = 25;
        ySpeed = 0;
      } else if (keyIsDown (LEFT_ARROW)) {
        xSpeed = -25;
        ySpeed = 0;

      } else if (keyIsDown (DOWN_ARROW)) {
        ySpeed = 25;
        xSpeed = 0;

      } else if (keyIsDown (UP_ARROW)) {
        ySpeed = -25;
        xSpeed = 0;

      }
      frameRate (10);
      x+=xSpeed;
      y+=ySpeed;
    }

function die () {
  if (x<0 || x>675 || y<0 || y>675) {
    textSize (20);
    fill(255);
    var ded = true;
    text("Maxwell will never forgive u", 100,300);
    text("Score is " + score,100,500);
  }
  if (ded==true) {
    text("Maxwell will never forgive u", 100,300);
    text("Score is " + score,100,500);
  }
}

function Fewd () {
  this.col = round(random(width/25));
  this.row = round(random(height/25));
  fill(80,255,40);
  rect(this.col*25,this.row*25,25,25);
}
