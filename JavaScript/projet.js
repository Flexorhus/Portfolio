
const slides = document.querySelector('.slides');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Move slides
        slides.style.transform = `translateX(-${index * 100}%)`;
        // Update active navigation button
        document.querySelector('.nav-btn.active').classList.remove('active');
        button.classList.add('active');
    });
});

// Set the first button as active by default
navButtons[0].classList.add('active');
