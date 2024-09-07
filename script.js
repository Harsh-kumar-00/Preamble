const wheel = document.getElementById('wheel');
const spinSound = new Audio('spin-sound.mp3');
spinSound.preload = 'auto';

wheel.addEventListener('click', () => {
    spinSound.play();
    const randomDegree = Math.floor(Math.random() * 360);
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${3600 + randomDegree}deg)`;

    const resultIndex = Math.floor(((3600 + randomDegree) % 360) / 45); // Adjusted for 8 segments
    const segments = ['Citizenship', 'Amendments', 'Sovereignty', 'Official Languages', 'Fundamental Rights', 'Secularism', 'Federal', 'The States'];
    const result = segments[resultIndex];

    console.log(`Wheel stopped at: ${result}`);
});

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');  // Hide the current image
    currentIndex = (currentIndex + 1) % images.length;  // Move to the next index in a loop
    images[currentIndex].classList.add('active');  // Show the next image
}

// Change images every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 5000);

// Initially show the first image
images[currentIndex].classList.add('active');

document.querySelectorAll('.article-titles .title').forEach(title => {
    title.addEventListener('mouseover', () => {
        // Add your JavaScript code here for extra behavior
        console.log('Hovered over ' + title.textContent);
    });
});

document.getElementById('rope').addEventListener('click', function () {
    const imageOverlay = document.getElementById('imageOverlay');
    const content = document.getElementById('content');

    // Check if the overlay is currently pulled down
    if (imageOverlay.style.top === '0%') {
        // Pull up the image overlay
        hideOverlay(imageOverlay, content);
    } else {
        // Pull down the image overlay
        showOverlay(imageOverlay, content);
    }
});

// Function to hide the overlay
function hideOverlay(overlay, content) {
    overlay.style.top = '-100%'; // Move it back up
    content.classList.remove('blur'); // Remove blur effect from background
}

// Function to show the overlay
function showOverlay(overlay, content) {
    overlay.style.top = '0%'; // Bring it down
    content.classList.add('blur'); // Add blur effect to background
}

// Add an event listener to the image overlay to hide it when clicked
document.getElementById('imageOverlay').addEventListener('click', function () {
    const content = document.getElementById('content');
    hideOverlay(this, content); // Hide the overlay when clicked
});

