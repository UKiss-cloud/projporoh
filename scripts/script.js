
const sliderImages = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0; 
function showImage(index) {
    sliderImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active'); 
        } else {
            image.classList.remove('active'); 
        }
    });
}
function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length; 
    showImage(currentIndex);
}
function prevImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length; 
    showImage(currentIndex);
}
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
showImage(currentIndex);
// Автоматическая прокрутка слайдера каждые 5 секунд
setInterval(nextImage, 5000);