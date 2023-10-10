const listItems = document.querySelectorAll('.list-item');
const mainImage = document.getElementById('main-image');
let currentImage = 'default-image.jpg';

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const imageUrl = item.getAttribute('data-image');
        mainImage.src = imageUrl;
        currentImage = imageUrl; 
    });
});

