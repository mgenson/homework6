var video;
var speed;
var time;
var seconds;
var skip;

function getVid() {
	let video = document.querySelector("#myVideo");
}

function playVid() {
	let video = document.querySelector("#myVideo");
	console.log("Play Video");
	video.play();

	let volume = document.querySelector("#volume");
	volume.innerHTML = video.volume * 100 + "%";
}

function pauseVid() {
	let video = document.querySelector("#myVideo");
	console.log("Pause Video");
	console.log(video)
	video.pause();
}

function decreaseSpeed() {
		let video = document.querySelector("#myVideo");
		let speed = video.playbackRate;
		console.log("Speed is "+ video.playbackRate );
		console.log("Speed is " + speed);
		video.playbackRate= speed - (speed * (.20));
}

function increaseSpeed() {
	let video = document.querySelector("#myVideo");
	let speed = video.playbackRate;
	console.log("Speed is "+ video.playbackRate);
	console.log("Speed is" + speed);
	video.playbackRate = speed + (speed *(.25));
}

function skipAhead() {
	let video = document.querySelector("#myVideo");
	let time = video.currentTime;
	console.log("Current location is "+ time);
	console.log(time + 60);
	video.currentTime = time + (time + 60);
	if (video.ended){
		video.load()
		video.play()
	};


}

function mute() {
	let video = document.querySelector("#myVideo");
	if (video.muted){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML ="Mute";
	} else{
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML ="Unmute"

	}




}

function changeVolume() {
	let video = document.querySelector("#myVideo");
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is "+ video.volume);
	volume.innerHTML = (slider.value) + "%";
}


function gray() {
	let video = document.querySelector("#myVideo");
	video.classList.toggle("grayscale");
	console.log("In grayscale")
	// video.style.filter("#grayscale")
}

function color() {
	let video = document.querySelector("#myVideo");
	video.classList.toggle("grayscale");

	console.log("In color")
}
