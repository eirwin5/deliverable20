var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.pause(); 
  video.loop = false;

  document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
	updateVolume(); 
  });

  document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
  });

  // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
  this.document.querySelector("#slower").addEventListener("click", function () {
    console.log("Slow Video");
    video.playbackRate = video.playbackRate * 0.9;
    console.log(video.playbackRate);
  });

  // Increase the current video speed each time the button is clicked and log the new speed to the console.
  // Change it by an amount proportional to the slow down. CHECK THIS!!
  // If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
  this.document.querySelector("#faster").addEventListener("click", function () {
    console.log("Speed Video");
    video.playbackRate = video.playbackRate * 1.1;
    console.log(video.playbackRate);
  });

  // Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.
  // Log the current location of the video.
  this.document.querySelector("#skip").addEventListener("click", function () {
    console.log("Skip ahead");
    console.log(video.currentTime);
    video.currentTime =
      video.currentTime + 10 < video.duration ? video.currentTime + 10 : 0;
  });

  // Mute/unmute the video and update the text in the button.
  this.document.querySelector("#mute").addEventListener("click", function () {
    console.log("Mute Video");
	console.log(video.muted); 
      video.muted = !video.muted; 
	  document.querySelector("#mute").innerHTML = video.muted ? "Unmute" : "Mute"; 
  });

  // Change the volume based on the slider and update the volume information.
  this.document.querySelector("#slider").addEventListener("input", function () {
    console.log("Change volume");
	console.log(video.volume); 
	video.volume = this.value / 100; 
	document.querySelector("#volume").innerHTML = this.value + '%'; 
  });

  // Styled: Utilize the existing oldSchool class on the video element
  this.document.querySelector("#vintage").addEventListener("click", function () { 
	video.classList.add("oldSchool"); 
  })

  // Original: Remove the oldSchool class from the video.
  this.document.querySelector("#orig").addEventListener("click", function () { 
	video.classList.remove("oldSchool"); 
  })
});

function updateVolume() { 
	console.log(video.volume); 
	video.volume = document.querySelector("#slider").value / 100; 
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'; 
}
