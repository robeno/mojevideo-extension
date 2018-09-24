// ENTER/EXIT FULL SCREEN VIDEO FUNCTION
window.fullScreenFunction = function (video) {
  const d = document;
  const isInFullScreen = (d.fullscreenElement && d.fullscreenElement !== null) ||
    (d.webkitFullscreenElement && d.webkitFullscreenElement !== null) ||
    (d.mozFullScreenElement && d.mozFullScreenElement !== null) ||
    (d.msFullscreenElement && d.msFullscreenElement !== null);

  if (!isInFullScreen) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  } else {
    if (d.exitFullscreen) {
      d.exitFullscreen();
    } else if (d.webkitExitFullscreen) {
      d.webkitExitFullscreen();
    } else if (d.mozCancelFullScreen) {
      d.mozCancelFullScreen();
    } else if (d.msExitFullscreen) {
      d.msExitFullscreen();
    }
  }
}

// ADD EVENT LISTENER FOR VIDEO
const video = document.getElementById('vi');
if (video) {
  window.addEventListener("keydown", videoTime);
}

function videoTime(e) {
  const video = document.getElementById('vi');
  if (!video) {
    return;
  }
  const keyCode = e.keyCode;

  if (keyCode == '37') { // LEFT ARROW
    const newTimeMinus = video.currentTime - 5;
    if (newTimeMinus > 0) {
      video.currentTime = newTimeMinus;
    }
    return;
  }
  if (keyCode == '39') { // RIGHT ARROW
    const newTimePlus = video.currentTime + 5;
    if (newTimePlus < video.duration) {
      video.currentTime = newTimePlus;
    }
    return;
  }
  if (keyCode == '70') { // F
    window.fullScreenFunction(video);
    return;
  }
  if (keyCode == '32') { // SPACE
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    e.preventDefault();

    // CREATE FAKE EVENT AND DISPATCH "K" KEY EVENT BACK BACK
    const eventObj = document.createEvent('Events');

    eventObj.initEvent('keydown', true, true);
    eventObj.keyCode = 75;
    eventObj.which = 75;

    document.body.dispatchEvent(eventObj);
  }
}
