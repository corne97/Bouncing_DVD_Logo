let speed = 50;
let scale = 0.17; 
let canvas;
let ctx;
let logoColor;
let lasTime = performance.now();

let dvd = {
    x: 200,
    y: 300,
    xspeed: 300,
    yspeed: 300,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("DVDLogo");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'dvd-logo.png';

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    chooseColor();
    update();
})();


function update() {
	
		
		const now = performance.now();
		// the time is in ms and we want to convert it to seconds
		const delta =(lasTime - now) / 1000;
		// set the lastTime to this frame's render time
		lasTime = now;

        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);

        // DVD logo movement
        dvd.x+=dvd.xspeed *delta;
        dvd.y+=dvd.yspeed *delta;
        //Check for collision 
        checkColission();
        
    requestAnimationFrame(update);
}

// collision check
function checkColission(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        chooseColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        chooseColor();
    }    
}

// randomize color in rgb
function chooseColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}