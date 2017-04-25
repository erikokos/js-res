;(function(){
	window.SpaceInviders = function(el){
			el.style.height = '500px';
			el.style.width = '800px';
			el.style.background = 'black';
			this.GameManager = new GameManager(el);		
	}

	function GameManager(el) {
		this.arrEnemy = [];
		for(var i = 0; i < 4; i++){
			var enemy = new Shape(el, 'img/enemy1.png', (150 + 128 * i), 33); //Enemy - model
			this.arrEnemy.push(enemy);
		};
		this.player = new Shape(el, 'img/playerGun.png', 400, 460); //Player - model
		this.bullets = [];
		var that = this;
		document.addEventListener('keydown', function(event) {
			if(event.keyCode === 37) { //Left button pressed
				that.player.move(-5, 0);
			} else if (event.keyCode === 39) { //Right button pressed
				that.player.move(5, 0);
			} else if (event.keyCode === 32) { //Shooting
				var bullet = new Shape(el, 'img/bullet.png', that.player._x + 19, that.player._y);
				that.bullets.push(bullet);
			}
		})
		this.loop = function() {
			var dX = this.random() * 2;      
			var dY = this.random() * 2;
			for(var i = 0; i < this.arrEnemy.length; i++) {
				this.arrEnemy[i].move(dX, dY);
			};
			for(var i = 0; i < this.bullets.length; i++) {
				this.bullets[i].move(0, -5); 
			};
		}.bind(this);
		this.random = function() {
			return Math.round(Math.random() * 2 - 1);
		};
		setInterval(this.loop, 100);
	}

	function Shape(el, path, x, y) {
		this._x = x;
		this._y = y;
		this.img = document.createElement('img');
		this.img.setAttribute('src', path);
		this.img.style.position = 'absolute';
		el.appendChild(this.img);
		this.setPosition = function(x, y) {
			this.img.style.top = y + 'px';
			this.img.style.left = x + 'px';
		};
		this.setPosition(this._x, this._y);
		this.move = function(dx, dy) {
			this._x += dx;
			this._y += dy;
			this.setPosition(this._x, this._y);
		};
	}
}());