const audio = document.getElementById('backgroundMusic');
const soundButton = document.getElementById('sound-button');

soundButton.addEventListener('click', () => {
    audio.play();
    soundButton.style.display = 'click';
});

audio.loop = True;
