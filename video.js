
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
	video.playbackRate = video.playbackRate * 1.05;
    console.log("Speed Up Video, New Speed: " + video.playbackRate);
	video.play();
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime = video.currentTime + 15;
    if(video.currentTime == video.duration){
        video.currentTime = 0;
        console.log("Going Back to Start of Video");
        video.play();
    }
    console.log("Current Location: " + video.currentTime);});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {    
        video.muted = true;
        document.querySelector('#mute').innerHTML = "Unmute";}
    else { video.muted = false;
        document.querySelector('#mute').innerHTML = "Mute";}});

document.querySelector("#slider").addEventListener("click", function() {
    console.log(this.value);
    video.volume = this.value/100
    document.getElementById("volume").innerHTML = this.value+"%";});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Vintage");
    video.classList.add("Video Style: oldSchool");s});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Video Style: Back to normal");
    video.classList.remove("oldSchool");});
