var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("video");
  video.autoplay = false;
  video.loop = false;

  document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	console.log(video);
	video.play();
  });

  document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	console.log(video);
	video.pause();
  });
});