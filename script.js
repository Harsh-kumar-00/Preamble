const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

spinButton.addEventListener('click', () => {
    const randomRotation = Math.floor(Math.random() * 360) + 360 * 5; // spin the wheel at least 5 rounds
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Disable button while spinning
    spinButton.disabled = true;

    setTimeout(() => {
        // Enable button again after spinning
        spinButton.disabled = false;

        // Calculate the result based on the rotation
        const result = (randomRotation % 360) / 60;
        alert(`Congratulations! You won precise format of article ${Math.floor(6 - result + 1)}`);
    }, 5000); // 5 seconds for the spin animation
});
