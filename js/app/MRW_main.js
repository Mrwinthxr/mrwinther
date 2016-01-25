define(['jquery'],function($) {
	
	console.log("Les'sa go!");

	// Canvas functionalities

	var ctx     = document.getElementById("planet_canvas").getContext("2d");
	var ctx_x   = ctx.canvas.width;
	var ctx_y   = ctx.canvas.height;
	var iplanet = new Image();
	var frames  = 0;
	var FPS 		= 0;
	var pat; 

	console.log(ctx);
	console.log("x: "+ctx_x+" y: "+ctx_y);

	function canvas_init() {
		iplanet.src = "images/blueplanet.png";
		iplanet.onload = function() {
			pat = ctx.createPattern(iplanet, 'no-repeat');
			animate();
		}	
	}

	function animate() {

		//setTimeout(animate, 1000 / (1 * FPS));

		ctx.arc(ctx_x*0.7, ctx_y*0.58, 390, 0, Math.PI * 2);
		ctx.fillStyle = pat;
		ctx.fill();

		if (frames%10 == 0) {


			ctx.clearRect(0,0,ctx_x,ctx_y);

			ctx.arc(ctx_x*0.7, ctx_y*0.58, 390, 0, Math.PI * 2);
			ctx.fillStyle = pat;
			ctx.fill();

		};

		//ctx.rotate(Math.PI/180);
		frames++;

		//window.requestAnimationFrame(animate);
	}

	canvas_init();

});