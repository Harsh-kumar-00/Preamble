// Select the wheel and search input elements
const wheel = document.getElementById('wheel');
const searchInput = document.getElementById('search-input');

// Create audio for spinning sound
const spinSound = new Audio('spin-sound.mp3');
spinSound.preload = 'auto';

// Create audio for typing sound
const typingSound = new Audio('typing-sound.mp3');
typingSound.preload = 'auto';

// Function to spin the wheel
wheel.addEventListener('click', () => {
    // Play the spinning sound
    spinSound.play();

    // Generate a random degree between 0 and 360
    const randomDegree = Math.floor(Math.random() * 360);

    // Apply rotation with a smooth transition
    wheel.style.transition = 'transform 4s ease-out'; // Smooth transition for 4 seconds
    wheel.style.transform = `rotate(${3600 + randomDegree}deg)`;
    
    // Calculate the result segment based on the final rotation
    const resultIndex = Math.floor(((3600 + randomDegree) % 360) / 60);
    const segments = ['Part I', 'Part II', 'Fundamental Rights', 'DPSP', 'Fundamental Duties', 'Preamble'];
    const result = segments[resultIndex];
    
    // Output the result to the console or display it on the page
    console.log(`Wheel stopped at: ${result}`);
});

// Add event listeners for typing sound
searchInput.addEventListener('keydown', () => {
    // Play the typing sound if it's not already playing
    if (typingSound.paused) {
        typingSound.loop = true; // Loop the typing sound
        typingSound.play();
    }
});

searchInput.addEventListener('keyup', () => {
    // Stop the typing sound when the key is released
    typingSound.pause();
    typingSound.currentTime = 0; // Reset the sound to the beginning
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

