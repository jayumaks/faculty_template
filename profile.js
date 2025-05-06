const buttons = document.querySelectorAll('.view-more');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const bio = button.previousElementSibling;

        const shortText = bio.getAttribute('data-short');
        const fullText = bio.getAttribute('data-full');

        if (bio.classList.contains('short')) {
            bio.textContent = fullText;
            button.textContent = "View Less";
            bio.classList.remove('short');
        } else {
            bio.textContent = shortText;
            button.textContent = "View Full Profile";
            bio.classList.add('short');
        }
    });
});
