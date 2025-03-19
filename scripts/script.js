// Алгоритм слайдера:
// 1. Инициализация элементов: получаем изображения и кнопки.
// 2. Устанавливаем начальный индекс текущего изображения.
// 3. Функция showImage: показывает изображение с текущим индексом и скрывает остальные.
// 4. Функция nextImage: переключает на следующее изображение.
// 5. Функция prevImage: переключает на предыдущее изображение.
// 6. Добавляем слушатели событий на кнопки "Назад" и "Вперед".
// 7. При каждом переключении выводим текущий индекс в консоль для проверки.
//
// Блок-схема: images->diagramma

// 1. Инициализация элементов
const sliderImages = document.querySelectorAll('.slider-image'); // Все изображения слайдера
const prevBtn = document.getElementById('prevBtn'); // Кнопка "Назад"
const nextBtn = document.getElementById('nextBtn'); // Кнопка "Вперед"
const sliderContainer = document.querySelector('.slider-container'); // Контейнер слайдера
let currentIndex = 0; // Текущий индекс изображения
let autoSlideInterval; // Интервал для автоматического перелистывания
let isAutoSlideActive = true; // Флаг для отслеживания состояния автоматического перелистывания

// 2. Проверка наличия изображений в слайдере
if (sliderImages.length === 0) {
    console.error('В слайдере нет изображений!');
} else {
    console.log(`Найдено ${sliderImages.length} изображений.`);
}

// 3. Функция показа изображения
function showImage(index) {
    sliderImages.forEach((image, i) => {
        image.classList.toggle('active', i === index); // Показываем текущее изображение, скрываем остальные
    });
}

// 4. Функция перехода к следующему изображению
function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length; // Увеличиваем индекс с учетом цикличности
    updateSlider();
}

// 5. Функция перехода к предыдущему изображению
function prevImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length; // Уменьшаем индекс с учетом цикличности
    updateSlider();
}

// 6. Обновление слайдера
function updateSlider() {
    showImage(currentIndex); // Показываем текущее изображение
    console.log(`Текущее изображение: ${currentIndex}`); // Выводим индекс в консоль
}

// 7. Автоматическое перелистывание
function startAutoSlide(interval = 3000) {
    if (isAutoSlideActive) {
        autoSlideInterval = setInterval(() => {
            nextImage(); // Переключаем на следующее изображение
        }, interval);
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Останавливаем автоматическое перелистывание
}

// 8. Переключение состояния автоматического перелистывания
function toggleAutoSlide() {
    isAutoSlideActive = !isAutoSlideActive; // Меняем состояние флага
    if (isAutoSlideActive) {
        startAutoSlide(); // Возобновляем автоматическое перелистывание
        console.log('Автоматическое перелистывание возобновлено.');
    } else {
        stopAutoSlide(); // Останавливаем автоматическое перелистывание
        console.log('Автоматическое перелистывание приостановлено.');
    }
}

// 9. Инициализация событий
function initSlider() {
    // Показываем первое изображение при загрузке страницы
    showImage(currentIndex);

    // Добавляем слушатели событий на кнопки
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Автоматическое перелистывание
    startAutoSlide();

    // Останавливаем автоматическое перелистывание при наведении на слайдер
    sliderContainer.addEventListener('mouseenter', () => {
        stopAutoSlide();
        console.log('Автоматическое перелистывание приостановлено (наведение).');
    });

    // Возобновляем автоматическое перелистывание при уходе курсора со слайдера
    sliderContainer.addEventListener('mouseleave', () => {
        if (isAutoSlideActive) {
            startAutoSlide();
            console.log('Автоматическое перелистывание возобновлено (уход курсора).');
        }
    });
}

// 10. Запуск инициализации слайдера
initSlider();