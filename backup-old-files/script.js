document.addEventListener('mousemove', (e) => {
    // Scroll feature
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const xPos = ((e.pageX - scrollX) / window.innerWidth) * 100;
    const yPos = ((e.pageY - scrollY) / window.innerHeight) * 100;

    const backgroundEffect = document.querySelector('.background-effect');
    backgroundEffect.style.backgroundImage = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 0%, transparent 30%)`;
});
