// Алгоритм слайдера:
// 1. Инициализация элементов: получаем изображения и кнопки.
// 2. Устанавливаем начальный индекс текущего изображения.
// 3. Функция showImage: показывает изображение с текущим индексом и скрывает остальные.
// 4. Функция nextImage: переключает на следующее изображение.
// 5. Функция prevImage: переключает на предыдущее изображение.
// 6. Добавляем слушатели событий на кнопки "Назад" и "Вперед".
// 7. При каждом переключении выводим текущий индекс в консоль для проверки.
//
// Блок-схема: https://disk.yandex.ru/d/hDGpNo7dAsepzg

// 1. Инициализация элементов
const sliderImages = document.querySelectorAll('.slider-image'); // Все изображения слайдера
const prevBtn = document.getElementById('prevBtn'); // Кнопка "Назад"
const nextBtn = document.getElementById('nextBtn'); // Кнопка "Вперед"
let currentIndex = 0; // Текущий индекс изображения

// 2. Функция показа изображения
function showImage(index) {
    // Перебираем все изображения
    sliderImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active'); // Показываем текущее изображение
        } else {
            image.classList.remove('active'); // Скрываем остальные
        }
    });
}

// 3. Функция перехода к следующему изображению
function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length; // Увеличиваем индекс
    showImage(currentIndex); // Показываем новое изображение
    console.log(`Текущее изображение: ${currentIndex}`); // Выводим индекс в консоль
}

// 4. Функция перехода к предыдущему изображению
function prevImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length; // Уменьшаем индекс
    showImage(currentIndex); // Показываем новое изображение
    console.log(`Текущее изображение: ${currentIndex}`); // Выводим индекс в консоль
}

// 5. Добавляем слушатели событий на кнопки
prevBtn.addEventListener('click', prevImage); // Кнопка "Назад"
nextBtn.addEventListener('click', nextImage); // Кнопка "Вперед"

// 6. Показываем первое изображение при загрузке страницы
showImage(currentIndex);
// 7. Автоматическое перелистывание фотографий
let autoSlideInterval;

function startAutoSlide(interval = 3000) {
    autoSlideInterval = setInterval(nextImage, interval); // Запускаем автоматическое перелистывание
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Останавливаем автоматическое перелистывание
}

// Запускаем автоматическое перелистывание при загрузке страницы
startAutoSlide();

// Останавливаем автоматическое перелистывание при наведении на слайдер
const sliderContainer = document.querySelector('.slider-container'); // Контейнер слайдера
sliderContainer.addEventListener('mouseenter', stopAutoSlide);

// Возобновляем автоматическое перелистывание при уходе курсора со слайдера
sliderContainer.addEventListener('mouseleave', () => startAutoSlide());

// 6. Показываем первое изображение при загрузке страницы
showImage(currentIndex);