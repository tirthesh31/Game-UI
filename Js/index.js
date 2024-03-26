const loaderVideo = document.getElementById('loaderVideo');
const pageLoader = document.querySelector('.pageLoader');
const initialPage = document.querySelector('.initialPage');
const pageInstruction = document.querySelector('.pageInstruction');

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32 ) { 

        // Spacebar is pressed
        loaderVideo.play(); 
        pageInstruction.style.display = 'none   ';
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    }
});

var opacityCount = 1;
loaderVideo.addEventListener('ended', () => {
    
    pageLoader.style.opacity = "0"; // Fade out the pageLoader
    setTimeout(() => {
        pageLoader.style.display = 'none'; // Hide the pageLoader
        initialPage.style.opacity = "1"; // Fade in the initialPage
        initialPage.style.display = 'flex';
        initialPage.style.justifyContent = "center";
        initialPage.style.alignItems = "end";

        var audioElement = document.createElement("audio");
        audioElement.src = '../Song/cinematic-arabic-dawn-3509.mp3';
        audioElement.loop = true;
        audioElement.play();
        initialPage.appendChild(audioElement);
    }, 1000); // Adjust the delay as needed to match your transition duration

});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Navigate to the next page
        window.location.href = '../Html/menu.html';
    }
});