document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector('.typing');
    const words = ['Business Analytics', 'Web Developer', 'Graphic Designer'];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, letterIndex--);
        } else {
            typingElement.textContent = currentWord.substring(0, letterIndex++);
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }

    type();

});