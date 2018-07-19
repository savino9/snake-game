var s;
var scl = 10;

var food;
var score;

const cv = {
	x:800,
	y:400,
}

const head = {
	x:400,
	y:200,
	w:140,
	h:200,
	color: {r:0,g:245,b:0},
	leftEye: {x:350,y:200,w:20,h:35},
	leftEyeIn: {x:351,y:200,w:4,h:7},
	rightEye: {x:450,y:200,w:20,h:35},
	rightEyeIn: {x:451,y:200,w:4,h:7},
}

// main function (remember run only ones)
function setup() {
	score = createDiv('Score: 0');
	score.position(20,20);
	score.id = 'score';
	score.style('color', 'white');
	
	noStroke();
	frameRate(10);

	createCanvas(cv.x,cv.y);
	
	s = new snake();
	pickLocation();
}

// pick the location of the head and the food
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));	
	
	food.mult(scl);
}

// draw function is called all the time
function draw() {
	background(0);
	// createHead();
	s.update();
	s.show();

	if (s.eat(food)) {
		pickLocation();
	}

	fill(255,0,0);
	ellipse(food.x, food.y, scl, scl);

	const canvasLeftEyeX = map(mouseX,0,cv.x,head.leftEyeIn.x-7,head.leftEyeIn.x+1);
	const canvasLeftEyeY = map(mouseY,0,cv.y,head.leftEyeIn.y-8,head.leftEyeIn.y+7);
	const canvasRightEyeX = map(mouseX,0,cv.x,head.rightEyeIn.x-7,head.rightEyeIn.x+1);
	const canvasRightEyeY = map(mouseY,0,cv.y,head.rightEyeIn.y-8,head.rightEyeIn.y+7);

	// LEFT BLACK eye in
	fill(0);
	ellipse(canvasLeftEyeX,canvasLeftEyeY,head.leftEyeIn.w,head.leftEyeIn.h);

	// RIGHT BLACK eye in
	fill(0);
	ellipse(canvasRightEyeX,canvasRightEyeY,head.rightEyeIn.w,head.rightEyeIn.h);	
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

// big headSnake
function createHead() {
	// head (remember fill always before the shape)
	var mainHead = {
		color: fill(head.color.r,head.color.g,head.color.b),
		bodyHead: ellipse(head.x,head.y,head.w,head.h),
		// LEFT WHITE eye snake 
		color: fill(255),
		leftEyeW: ellipse(head.leftEye.x,head.leftEye.y,head.leftEye.w,head.leftEye.h),
		// RIGHT WHITE eye snake
		color: fill(255),
		rightEyeW: ellipse(head.rightEye.x,head.rightEye.y,head.rightEye.w,head.rightEye.h),
	}
}
