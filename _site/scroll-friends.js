document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.friends-card-container');
    const leftArrow = document.querySelector('.friends-scroll-arrow.left');
    const rightArrow = document.querySelector('.friends-scroll-arrow.right');

    // Smooth scrolling for mouse wheel
    cardContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        cardContainer.scrollBy({
            left: event.deltaY,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for left arrow
    leftArrow.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: -250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for right arrow
    rightArrow.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: 250, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });
});
