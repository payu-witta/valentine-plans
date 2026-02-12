// Envelope click handler
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const letterWindow = document.querySelector('.letter-window');

envelope.addEventListener('click', () => {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'flex';
    setTimeout(() => {
        letterWindow.classList.add('open');
    }, 50);
});

// Yes button handler
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', () => {
    window.location.href = 'food.html';
});

// No button handler - makes it move away
const noBtn = document.getElementById('no-btn');
const noWrapper = document.querySelector('.no-wrapper');

noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noWrapper.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener('click', () => {
    // Make yes button bigger
    const currentSize = parseInt(window.getComputedStyle(yesBtn).width);
    yesBtn.style.width = (currentSize + 20) + 'px';
});