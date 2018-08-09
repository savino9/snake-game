function snake() {
	this.x = 0;
	this.y = 0;
	this.speedX = 1;
	this.speedY = 0;
	this.total = 0;
	this.tail = [];

	this.dir = function(x,y) {
		this.speedX = x;
		this.speedY = y;
	}

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		// console.log(d);
		if (d < 1) {
			this.total++;
			// console.log(this.total);
			return true;
		} else {
			return false;
		}
	}

	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length ; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.speedX*scl;
		this.y = this.y + this.speedY*scl;

		this.x = constrain(this.x, 10, width-scl);
		this.y = constrain(this.y, 10, height-scl);
	}

	this.show = function() {
		fill(255);
		for (var i = 0; i < this.total ; i++) {
			ellipse(this.tail[i].x, this.tail[i].y, scl, scl);	
		}
		ellipse(this.x, this.y, scl, scl);
	}

	this.gameOver = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				console.log('starting over');
				this.tail = [];
				this.total = 0;
				break;
			}			
			var g = dist(this.x,this.y, cv.x,cv.y);
			if (g < 1){
				console.log('hitting canvas');
				this.tail = [];
				this.total = 0;
				break;
			}
		}
	}
}