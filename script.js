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
