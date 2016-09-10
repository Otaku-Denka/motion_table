var canvas = document.getElementById('cvs');



canvas.setAttribute('width',400);
canvas.setAttribute('height',400);

var ctx = canvas.getContext('2d');

var X = canvas.width/2;
var Y = canvas.height/2;
var R = 100;
var size = 100;

  
  ctx.beginPath();
  ctx.strokeStyle = "#1987E5";
	ctx.arc(X ,Y ,R,0,Math.PI*2,false);
	ctx.stroke()

	ctx.beginPath();
	ctx.moveTo(X + size * Math.cos(0), Y + size * Math.sin(0));
	for(var side = 0; side < 7 ; side ++){
		ctx.lineTo(X + size * Math.cos(side * Math.PI / 3), Y + size * Math.sin(side * Math.PI / 3))
	}
	ctx.stroke()

	