const cards = document.querySelectorAll('.card');

export const initMainContent = () => {
    handlerButton();
}

const handlerButton = () => {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = card.getAttribute('data-url');
        });
    });

    
}