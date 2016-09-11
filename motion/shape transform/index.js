var canvas = document.getElementById('cvs');



canvas.setAttribute('width',400);
canvas.setAttribute('height',400);

var ctx = canvas.getContext('2d');

var X = canvas.width/2;
var Y = canvas.height/2;
var R = 100;
var size = 100;
var triSize = 50;
var speed = 0.5;
var angle = 6;
var loop;

  

	function drawHexagon(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.moveTo(X + size * Math.sin(0), Y - size * Math.cos(0));
		
		for(var side = 0; side < 7 ; side ++){
			ctx.lineTo(X + size * Math.sin(side * 2 * Math.PI / angle), Y - size * Math.cos(side * 2 * Math.PI / angle))
		}
		ctx.stroke()

	}

	function transTriangle(){
		var size2 = size - speed;

		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.moveTo(X + size * Math.sin(0), Y - size * Math.cos(0));
		
		
		ctx.lineTo(X + size * Math.sin(0 * 2 * Math.PI / angle), Y - size * Math.cos(0 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(1 * 2 * Math.PI / angle), Y - size2 * Math.cos(1 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(2 * 2 * Math.PI / angle), Y - size * Math.cos(2 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(3 * 2 * Math.PI / angle), Y - size2 * Math.cos(3 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(4 * 2 * Math.PI / angle), Y - size * Math.cos(4 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(5 * 2 * Math.PI / angle), Y - size2 * Math.cos(5 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(6 * 2 * Math.PI / angle), Y - size * Math.cos(6 * 2 * Math.PI / angle))
	
		ctx.stroke()

	
		speed += 0.5;
		loop = setTimeout(function(){
			transTriangle()
			
			if (size2 == 50){
				speed = 0;
				size2 = 50;
				clearTimeout(loop)
			}
		},1000/60);

	}

	function transHexagon(){
		var size2 = triSize + speed;

		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.moveTo(X + size * Math.sin(0), Y - size * Math.cos(0));
		
		
		ctx.lineTo(X + size * Math.sin(0 * 2 * Math.PI / angle), Y - size * Math.cos(0 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(1 * 2 * Math.PI / angle), Y - size2 * Math.cos(1 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(2 * 2 * Math.PI / angle), Y - size * Math.cos(2 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(3 * 2 * Math.PI / angle), Y - size2 * Math.cos(3 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(4 * 2 * Math.PI / angle), Y - size * Math.cos(4 * 2 * Math.PI / angle))
		ctx.lineTo(X + size2 * Math.sin(5 * 2 * Math.PI / angle), Y - size2 * Math.cos(5 * 2 * Math.PI / angle))
		ctx.lineTo(X + size * Math.sin(6 * 2 * Math.PI / angle), Y - size * Math.cos(6 * 2 * Math.PI / angle))
	
		ctx.stroke()

	
		speed += 0.5;
		loop = setTimeout(function(){
			transHexagon()
			if (size2 == 100){
				speed = 0;
				size2 = 100;
				clearTimeout(loop)
			}
		},1000/60);
	}


	function transAntiTri(){
		var size2 = size - speed;

		ctx.clearRect(0,0,canvas.width,canvas.height);
		
		ctx.beginPath();
		ctx.moveTo(X -size * Math.sin(0), Y + size * Math.cos(0));
		

		
		ctx.lineTo(X - size * Math.sin(0 * 2 * Math.PI / angle), Y + size * Math.cos(0 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(1 * 2 * Math.PI / angle), Y + size2 * Math.cos(1 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(2 * 2 * Math.PI / angle), Y + size * Math.cos(2 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(3 * 2 * Math.PI / angle), Y + size2 * Math.cos(3 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(4 * 2 * Math.PI / angle), Y + size * Math.cos(4 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(5 * 2 * Math.PI / angle), Y + size2 * Math.cos(5 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(6 * 2 * Math.PI / angle), Y + size * Math.cos(6 * 2 * Math.PI / angle))
		
		ctx.stroke()

	
		speed += 0.5;
		loop = setTimeout(function(){
			transAntiTri()
			
			if (size2 == 50){
				speed = 0;
				size2 = 50;
				clearTimeout(loop)
			}
		},1000/60);
	}

	function transAntiHex(){
		var size2 = triSize + speed;

		ctx.clearRect(0,0,canvas.width,canvas.height);
		
		ctx.beginPath();
		ctx.moveTo(X -size * Math.sin(0), Y + size * Math.cos(0));
		

		
		ctx.lineTo(X - size * Math.sin(0 * 2 * Math.PI / angle), Y + size * Math.cos(0 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(1 * 2 * Math.PI / angle), Y + size2 * Math.cos(1 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(2 * 2 * Math.PI / angle), Y + size * Math.cos(2 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(3 * 2 * Math.PI / angle), Y + size2 * Math.cos(3 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(4 * 2 * Math.PI / angle), Y + size * Math.cos(4 * 2 * Math.PI / angle))
		ctx.lineTo(X - size2 * Math.sin(5 * 2 * Math.PI / angle), Y + size2 * Math.cos(5 * 2 * Math.PI / angle))
		ctx.lineTo(X - size * Math.sin(6 * 2 * Math.PI / angle), Y + size * Math.cos(6 * 2 * Math.PI / angle))
		
		ctx.stroke()

	
		speed += 0.5;
		loop = setTimeout(function(){
			transAntiHex()
			
			if (size2 == 100){
				speed = 0;
				size2 = 100;
				clearTimeout(loop)
			}
		},1000/60);
	}


	function play(){
		drawHexagon()
		setTimeout(function(){
			transTriangle()
			setTimeout(function(){
				transHexagon()
				setTimeout(function(){
					transAntiTri()
					setTimeout(function(){
						transAntiHex()
					},4000)
				},4000)
			},4000)
		},1000)

	};

	play()
	setInterval(play,17000)




	