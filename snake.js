function snake() {
	this.x = 0;
	this.y = 0;
	this.speedX = 1;
	this.speedY = 0;
	this.total = 1;
	this.tale = [];

	this.dir = function(x,y) {
		this.speedX = x;
		this.speedY = y;
	}

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		// console.log(d);
		if (d < 1) {
			this.total++;
			console.log(this.total);
			return true;
		} else {
			return false;
		}

	}

	this.update = function() {
		this.x = this.x + this.speedX*scl;
		this.y = this.y + this.speedY*scl;

		this.x = constrain(this.x, 10, width-scl);
		this.y = constrain(this.y, 10, height-scl);
	}

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, scl, scl);
	}
}