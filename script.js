// Create hearts effect// Hearts animation
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Run hearts continuously
setInterval(createHearts, 300);

// Move "No" button randomly
function moveButton(button) {
    const container = document.querySelector('.container');
    const x = Math.random() * (container.offsetWidth - button.offsetWidth);
    const y = Math.random() * (container.offsetHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Navigate to Step 2
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
}

// Navigate to Step 3
function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    triggerConfetti();
}

// Navigate to Final Step
function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('final').classList.add('active');

    // Show Facebook button
    document.querySelector('.facebook-btn').style.display = 'inline-block';

    // Trigger confetti multiple times for celebration
    triggerConfetti();
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

// Confetti function
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}


}
