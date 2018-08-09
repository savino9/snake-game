var s;
var scl = 10;
var totalScore = 0;

var food;

const cv = {
	x:500,
	y:400,
}

// main function (remember run only ones)
function setup() {	
	createCanvas(cv.x,cv.y);
	noStroke();
	frameRate(10);
	s = new snake();
	pickLocation();
}

// pick the location of the head and the food
function pickLocation() {
	var cols = floor(cv.x/scl);
	var rows = floor(cv.y/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));	
	food.mult(scl);
}

// draw function is called all the time
function draw() {
	background(0);
	s.gameOver();
	s.update();
	s.show();

	if (s.eat(food)) {
		pickLocation();
		updateScore();
	}

	fill(255,0,0);
	ellipse(food.x, food.y, scl, scl);
}

// Set keyboard commands
function keyPressed() {
	if(keyCode === UP_ARROW){
		s.dir(0,-1);
	} else if (keyCode === DOWN_ARROW){
		s.dir(0,1);
	}	else if (keyCode === RIGHT_ARROW){
		s.dir(1,0);
	}	else if (keyCode === LEFT_ARROW){
		s.dir(-1,0);
	};
}

// Score 
function updateScore() {
	var totalScore = 0;
	totalScore++;
	console.log(updateScore);
}
