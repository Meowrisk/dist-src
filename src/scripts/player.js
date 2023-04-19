let video;
let durationControl;
let soundControl;
let soundLevel;
let intervalId;

document.addEventListener('DOMContentLoaded', e => {
    video = document.getElementById('video');
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playStop);
    }

    let micControl = document.getElementById('micLevel');
    micControl.addEventListener('click', soundOf);

    durationControl = document.getElementById('durationLevel');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('click', setVideoDuration);

    durationControl.min = 0;
    durationControl.value = 0;

    soundControl = document.getElementById('volumeLevel');
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('mouseup', changeSoundVolume);

    soundControl.min = 0;
    soundControl.max = 10;

    soundControl.value = soundControl.max;
})

function playStop() {
    let playImg = document.querySelector('.player__splash__img');
    playImg.closest('.player__splash').classList.toggle('player--active');
    durationControl.max = video.duration;

    if (video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1000 / 66);
    } else {
        playImg.closest('.player__splash').classList.remove('player--active');
        video.pause();
        clearInterval(intervalId);
    }
}

function updateDuration() {
    durationControl.value = video.currentTime;
}

function soundOf() {
    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
}

function stopInterval() {
    video.pause();
    clearInterval(intervalId);
}

function setVideoDuration() {
    let playImg = document.querySelector('.player__splash__img');
    if (video.paused) {
        video.play();
        playImg.closest('.player__splash').classList.add('player--active');
    } else {
        video.pause();
        playImg.closest('.player__splash').classList.remove('player--active');
    }

    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000 / 66);
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
}

