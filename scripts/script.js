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





'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Фиксированный хедер
    const initFixedHeader = () => {
        const header = document.querySelector('.header');
        const container = document.querySelector('.header .container');
        
        if (!header || !container) return;

        const headerHeight = header.offsetHeight;
        const containerWidth = container.offsetWidth;

        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            height: ${headerHeight}px;
            display: none;
        `;
        header.parentNode.insertBefore(placeholder, header);

        const toggleFixedHeader = () => {
            const shouldFix = window.scrollY > headerHeight;
            
            header.classList.toggle('header--fixed', shouldFix);
            placeholder.style.display = shouldFix ? 'block' : 'none';
            
            if (shouldFix) {
                header.style.width = `${containerWidth}px`;
            } else {
                header.style.width = '';
            }
        };

        window.addEventListener('scroll', toggleFixedHeader);
    };

    // 2. Навигация по странице
    const initNavigation = () => {
        const menuLinks = document.querySelectorAll('.menu__link');
        
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const linkText = link.textContent.trim().toLowerCase();
                let targetElement;

                switch(linkText) {
                    case 'главная страница':
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                    case 'новинки':
                        targetElement = document.querySelector('.products__catalog');
                        break;
                    case 'распродажа':
                        targetElement = document.querySelector('.slider-container');
                        break;
                    case 'о нас':
                        targetElement = document.querySelector('footer');
                        break;
                    default:
                        return;
                }

                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // 3. Кнопка "Наверх"
    const initScrollButton = () => {
        const button = document.createElement('button');
        button.className = 'scroll-up';
        button.textContent = '↑';
        document.body.appendChild(button);

        const toggleButton = () => {
            button.classList.toggle('scroll-up--show', 
                window.scrollY > document.documentElement.clientHeight
            );
        };

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', toggleButton);
    };

    // Инициализация всех функций
    initFixedHeader();
    initNavigation();
    initScrollButton();
});