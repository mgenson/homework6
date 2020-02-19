var video;
var speed;

function getVid() {
	video = document.querySelector("#myVideo");
}

function playVid() {

	console.log("Play Video");
	video.play();
}

function pauseVid() {

	console.log("Pause Video");
	video.pause();
}

function decreaseSpeed() {
		speed = video.playbackRate;
		console.log("Speed is "+ video.playbackRate );
		console.log("Speed is " + speed);
		video.playbackRate= speed - (speed * (.20));
}

function increaseSpeed() {
	speed = video.playbackRate;
	console.log("Speed is "+ video.playbackRate);
	console.log("Speed is" + speed);
	video.playbackRate = speed + (speed *(.25));
}
//
// function skipAhead() {
//
// 	console.log("Current location is "+ );
// }
//
function mute() {
	if (video.muted == true){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML ="Mute";
	} else{
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML ="Unmute"

	}




}
//
// function changeVolume() {
// ;	console.log("Volume is ");
// }
//
//
function gray() {

	// video.documentByID('myVideo').style.filter = "grayscale(100%)";
	console.log("In grayscale")
}
//
// function color() {
//
// 	console.log("In color")
// }
