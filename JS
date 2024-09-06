const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${3600 + randomDegree}deg)`;
});
