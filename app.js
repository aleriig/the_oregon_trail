const audio = document.getElementById('backgroundMusic');
const soundButton = document.getElementById('sound-button');

soundButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        soundButton.textContent = 'TURN SOUND OFF';
    } else {
        audio.pause();
        soundButton.textContent = 'TURN SOUND ON';
    }
    // soundButton.style.display = 'pointer';
});



