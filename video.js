
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML= video.volume*100 +"%";});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();});

document.querySelector("#slower").addEventListener("click", function(){
    video.playbackRate = video.playbackRate * 0.95;
    console.log("Slowed Down Video, New speed: " + video.playbackRate);
	video.play();
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video, New Speed: " + video.playbackRate);
    video.playbackRate * 1.05
	video.play();
});