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



    //Массив
// Объявляем переменную productsContainer и сохраняем в нее элементы products
const productsContainer = document.querySelector(".products");

// Проверяем существует ли элемент productsContainer
if (productsContainer) {
    // Создаем массив объектов с данными о продуктах
    const productsData = [
        {
            name: "Розовый шарф",
            size: "Размер: Единый",
            price: "От 999 Р",
            description: "Мягкий и теплый розовый шарф из высококачественного акрила",
            materials: "Состав: 100% акрил",
            care: "Уход: ручная стирка при 30°C",
            image: "images/sharf.webp"
        },
        {
            name: "Синяя кофта",
            size: "Размеры: XS, S, M, L, XL",
            price: "От 1299 Р",
            description: "Стильная синяя кофта из мягкого хлопка с добавлением шерсти",
            materials: "Состав: 70% хлопок, 30% шерсть",
            care: "Уход: машинная стирка при 30°C",
            image: "images/kofta.webp"
        },
        {
            name: "Бежевая ветровка",
            size: "Размеры: XS, S, M, L, XL",
            price: "От 2999 Р",
            description: "Модная ветровка демисезон с качественной фурнитурой",
            materials: "Состав: 100% полиэстер",
            care: "Уход: машинная стирка при 40°C",
            image: "images/coat.webp"
        },
        {
            name: "Серый пиджак",
            size: "Размеры: XS, S, M, L, XL",
            price: "От 1999 Р",
            description: "Модный приталенный пиджак с дополнительной подкладкой",
            materials: "Состав: 60% кашемир, 40% шерсть",
            care: "Уход: ручная стирка при 30°C",
            image: "images/jacket.webp"
        },
        {
            name: "Пальто цвета Camel",
            size: "Размеры: XS, S, M, L, XL",
            price: "От 3999 Р",
            description: "Длинное пальто с внутренними карманами",
            materials: "Состав: 100% шерсть",
            care: "Уход: ручная стирка при 40°C",
            image: "images/palto.webp"
        }
    ];

    // Получаем все карточки продуктов
    const productCards = productsContainer.querySelectorAll(".products__card");

    // Обновляем данные для каждого продукта
    productCards.forEach((card, index) => {
        if (productsData[index]) {
            const product = productsData[index];
            
            // Устанавливаем основные данные
            card.querySelector(".products__name").textContent = product.name;
            card.querySelector(".products__size").textContent = product.size;
            card.querySelector(".products__price").textContent = product.price;
            
            // Устанавливаем изображение
            const imgElement = card.querySelector(".products_img");
            if (imgElement) {
                imgElement.src = product.image;
                imgElement.alt = product.name;
            }
            
            // Добавляем data-атрибуты для модального окна
            card.dataset.description = product.description;
            card.dataset.materials = product.materials;
            card.dataset.care = product.care;
            card.dataset.image = product.image;
        }
    });
}
  
  document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки "Узнать подробнее"
    const detailButtons = document.querySelectorAll('.products__link');
    const modal = document.querySelector('.modal');
    
    // Если элементы существуют
    if (detailButtons.length && modal) {
        // Получаем элементы модального окна
        const modalImage = modal.querySelector('.modal-image');
        const modalTitle = modal.querySelector('.modal-title');
        const modalPrice = modal.querySelector('.modal-price');
        const modalDescription = modal.querySelector('.modal-description');
        const modalMaterials = modal.querySelector('.modal-materials');
        const modalCare = modal.querySelector('.modal-care');
        const closeButton = modal.querySelector('.close');
        console.log("кнопка и окно получены")
        // Обработчик для каждой кнопки
        detailButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log("нажали на кнопку")
                // Получаем родительскую карточку товара
                const productCard = this.closest('.products__card');
                
                // Заполняем модальное окно данными из атрибутов
                modalImage.src = productCard.querySelector('.products_img').src;
                modalImage.alt = productCard.querySelector('.products__name').textContent;
                modalTitle.textContent = productCard.querySelector('.products__name').textContent;
                modalPrice.textContent = productCard.querySelector('.products__price').textContent;
                
                // Используем данные из data-атрибутов
                modalDescription.textContent = productCard.dataset.description;
                modalMaterials.textContent = productCard.dataset.materials;
                modalCare.textContent = productCard.dataset.care;
                
                // Показываем модальное окно
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Закрытие модального окна
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Закрытие при клике вне окна
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});


// Получаем элемент меню
const menu = document.querySelector('.menu');
const menuText = document.querySelector('.menu__text');

// Если меню существует
if (menu && menuText) {
    // Создаем объект с данными для меню
    const menuData = {
        home: {
            link: '#',
            title: 'Главная страница',
            section: 'home'
        },
        new: {
            link: '#new',
            title: 'Новинки',
            section: 'new'
        },
        sale: {
            link: '#sale',
            title: 'Распродажа',
            section: 'sale'
        },
        about: {
            link: '#about',
            title: 'О нас',
            section: 'about'
        }
    };

    // Функция для создания пункта меню
    const createMenuItem = (link, title, section) => {
        const menuItem = `
            <li class="menu__item">
                <a class="menu__link" href="${link}" data-section="${section}">${title}</a>
            </li>
        `;
        return menuItem;
    };

    // Добавляем пункты меню
    for (const item in menuData) {
        const menuItem = menuData[item];
        const menuItemHTML = createMenuItem(menuItem.link, menuItem.title, menuItem.section);
        menuText.insertAdjacentHTML('beforeend', menuItemHTML);
    }

    // Получаем все ссылки меню после их создания
    const menuLinks = document.querySelectorAll('.menu__link');

    // Обработчик кликов по меню
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Удаляем класс active у всех пунктов
            menuLinks.forEach(item => {
                item.parentElement.classList.remove('menu__item--active');
            });
            
            // Добавляем класс active текущему пункту
            e.target.parentElement.classList.add('menu__item--active');
            
            // Прокрутка к соответствующему разделу
            const section = e.target.dataset.section;
            scrollToSection(section);
        });
    });

    // Функция для прокрутки к разделу
    function scrollToSection(section) {
        switch(section) {
            case 'home':
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                break;
            case 'new':
                document.querySelector('.new').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            case 'sale':
                document.querySelector('.products').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
            case 'about':
                document.querySelector('.footer').scrollIntoView({
                    behavior: 'smooth'
                });
                break;
        }
    }

    // Делаем первый пункт меню активным по умолчанию
    const firstMenuItem = document.querySelector('.menu__item:first-child');
    if (firstMenuItem) {
        firstMenuItem.classList.add('menu__item--active');
    }
}



const cardsImages = document.querySelector(".images");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".images__list");
// Пример URL для получения данных с сервера
    const apiUrl = "images.json";
// Функция для создания карточки
    const createCard = (imageUrl, imageAlt, imageWidth) => {
// Шаблонные строки и подстановки
        const image = `
        <li class="images__item">
            <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
            <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
        </li>
    `;
        return image;
    };
    // Загрузка данных с сервера
fetch(apiUrl)
    .then((response) => response.json())
    .then((images) => {
        console.log(images); // Данные
        console.log(typeof images); // Тип полученных данных
        images.forEach((item) => {
            const cardElement = createCard(
                item.imageUrl,
                item.imageAlt,
                item.imageWidth
            );
            cardListImages.insertAdjacentHTML("beforeend", cardElement);
        });
        const pictures = document.querySelectorAll(".images__picture");
        if (pictures) {
// Перебираем каждое изображение
            pictures.forEach((picture) => {
                picture.addEventListener("click", () => {
// Получаем родительский элемент (li)
                    const parentItem = picture.parentElement;
// Получаем все изображения в родительском элементе
                    const parentPictures =
                        parentItem.querySelectorAll(".images__picture");
// Переключаем видимость изображений
                    parentPictures.forEach((parentPictures) => {
                        if (parentPictures !== picture) {
                            parentPictures.style.display = "block"; // Показываем другое изображение
                        } else {
                            parentPictures.style.display = "none"; // Скрываем текущее изображение
                        }
                    });
                });
            });
        }
    });
}


const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
setTimeout(() => {
// Скрываем прелоадер
preloader.style.opacity = "0";
preloader.style.visibility = "hidden";
// Показываем контент
content.style.display = "block";
// Удаляем элемент из DOM
preloader.remove();
}, 3000); // Задержка 3 секунды
}
