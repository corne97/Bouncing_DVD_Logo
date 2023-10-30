let speed = 12;
let scale = 0.17;
let canvas;
let ctx;
let logoColor;

let dvd = {
	x: 200,
	y: 300,
	xspeed: 10,
	yspeed: 10,
	img: new Image()
};

(function main()
{
	canvas = document.getElementById("DVDLogo");
	ctx = canvas.getContext("2d");
	dvd.img.src = 'dvd-logo.png';

	canvas.width = windwow.innerWidth;
	canvas.heigt = window.innerHeight;

	chooseColor();
	update();
})();

function update()
{
	setTimeout(() =>
	{
		// Draw canvas background
		ctx.fillStyle = '#000';
		ctxfillRect(0, 0, canvas.width, canvas.heigt);
		// set DVD logo and background
		ctx.fillStyle = logoColor;
		ctx.fillRect(dvd.x, dvd.y, dvd.img, width * scale, dvd.img.height * scale);
		ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

		// logo movement
		dvd.x += x.speed;
		dvd.y += y.speed;

		hitBox();
		update();
	}, speed)
}

// border collision check
function hitBox()
{
	if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0)
	{
		dvd.xspeed *= -1;
		chooseColor();
	}
	if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0)
	{
		dvd.yspeed *= -1;
		chooseColor();
	}
}
// randomize colors for logo
function chooseColor()
{
	r = Math.random() * (254 - 0) + 0;
	g = Math.random() * (254 - 0) + 0;
	b = Math.random() * (254 - 0) + 0;

	logoColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
}
