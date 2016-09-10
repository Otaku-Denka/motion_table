var canvas = document.getElementById('cvs');



canvas.setAttribute('width',500);
canvas.setAttribute('height',450);

var ctx = canvas.getContext('2d');

//中心點
var X = canvas.width/2;
var Y = canvas.height/2;
var x = 0;
var y = 0;
var radian = 0;

var t = radian*Math.PI/180;



var radius = 3;
var SPEED = 3;

function Draw_Stage(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    //X軸
    ctx.beginPath();
    ctx.strokeStyle = "#1987E5";
    ctx.moveTo(0,canvas.height/2);
    ctx.lineTo(canvas.width,canvas.height/2);
    ctx.stroke();
    
    //Y軸
    ctx.beginPath();
    ctx.strokeStyle = "#1987E5";
    ctx.moveTo(canvas.width/2,0);
    ctx.lineTo(canvas.width/2,canvas.height);
    ctx.stroke();
};

	function Draw_Sin(){

		var t2 = (radian)*Math.PI/180;
		var y2 = 150*Math.sin(t2);
		

		ctx.clearRect(0,0,canvas.width,canvas.height);
		Draw_Stage();
		// ctx.beginPath()
		// ctx.strokeStyle = '#FFFFFF';
		// drawDashLine(ctx,0,Y - y2,canvas.width,Y - y2,10)
		// ctx.beginPath();
		// ctx.arc(X ,Y - y2,15,0,Math.PI*2,false);
		// ctx.fillStyle = '#FFFFFF'
		// ctx.fill();
		// ctx.stroke();

		for(var i=0; i<=500; i+=10){
			t2 = (radian+i)*Math.PI/180;
			y2 = 150*Math.sin(t2);
			y3 = 150*Math.sin(t);
			ctx.beginPath()
			ctx.strokeStyle = '#FFFFFF';
			drawDashLine(ctx,0,Y - y3,canvas.width,Y - y3,10)
			ctx.beginPath();
			ctx.arc(X ,Y - y3,15,0,Math.PI*2,false);
			ctx.fillStyle = '#FFFFFF'
			ctx.fill();
			ctx.stroke();
			
			ctx.moveTo(x,y);
			x = i;
			y = Y - y2;
			ctx.lineTo(x,y);
			ctx.stroke();


		}
		
		console.log(t2 , y2,radian)
	
		radian = radian + SPEED;
		t = (radian+10)*Math.PI/180;
		setTimeout("Draw_Sin()",1000/60)


	};


	function getBeveling(x,y){
		return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	}

	function drawDashLine(context,x1,y1,x2,y2,dashLen){
		dashLen = dashLen === undefined ? 5 : dashLen;

		var beveling = getBeveling(x2-x1,y2-y1);

		var num = Math.floor(beveling/dashLen);
		
		for(var i = 0 ; i < num; i++)
		{
			context[i%2 == 0 ? 'moveTo' : 'lineTo'](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);
		}
		context.stroke();
	}




Draw_Sin();

