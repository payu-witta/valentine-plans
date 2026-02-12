const continueBtn = document.getElementById('continue-btn');
const errorMessage = document.getElementById('error-message');
const checkboxes = document.querySelectorAll('input[name="food"]');

continueBtn.addEventListener('click', () => {
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    
    if (selected.length !== 3) {
        errorMessage.style.display = 'block';
        errorMessage.style.animation = 'shake 0.5s';
    } else {
        errorMessage.style.display = 'none';
        window.location.href = 'dessert.html';
    }
});

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);