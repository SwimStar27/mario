function preload() {
	world_start = loadSound("world_start.wav");
	mariojump = loadSound("jump.wav");
	mariocoin = loadSound("coin.wav");
	mariogameover = loadSound("gameover.wav");
	mariokick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(700,400);
	video.parent("webcam");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}


function draw() {
	game()
}






