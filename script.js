document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character img');
    characters.forEach(character => {
        character.addEventListener('click', () => {
            alert(`Character Details:\nBiography: ${character.alt}`);
        });
    });

    window.addEventListener('scroll', () => {
        document.body.style.backgroundPosition = `center ${window.scrollY}px`;
    });
});
