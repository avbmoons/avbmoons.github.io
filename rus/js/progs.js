const progs = [
  {
    id: 1,
    name: "site-medinfo-laravel",
    image: "../assets/portfolio/img/porto-1.jpg",
    ref: "https://github.com/avbmoons/site-medinfo-laravel",
    text: "Серверная часть сайта поиска медицинских услуг.<br>Содержит подсистему управления базой данных и API для взаимодействия с клиентом.<br> Также вложен дамп тестовой базы данных.<br>Реализация на Laravel в Docker контейнере.",
  },
  {
    id: 2,
    name: "site-news-laravel",
    image: "../assets/portfolio/img/porto-2.jpg",
    ref: "https://github.com/avbmoons/site-news-laravel",
    text: "Клиент и сервер сайта новостей с парсингом новостей из заданных источников.<br>Содержит интерфейс отображения новостей, в том числе по категориям, подсистему управления базой данных (панель администратора) и подсистему регистрации и авторизации пользователей сайта.<br>Реализация на Laravel в Docker контейнере, верстка интерфейсов с использованием библиотек Bootstrap.",
  },
  {
    id: 3,
    name: "site-delivery-food",
    image: "../assets/portfolio/img/porto-3.jpg",
    ref: "https://avbmoons.github.io/delivery-food/index.html",
    text: "Версия фронт-части сайта компании доставки блюд и продуктов питания. Содержит страницы каталога, описания продукта, корзины, оформления заказа.<br>Реализация на Html5, Sass и javascript.<br>Функционал сайта находится в активной разработке",
  },
  {
    id: 4,
    name: "site-shop",
    image: "../assets/portfolio/img/porto-4.jpg",
    ref: "https://avbmoons.github.io/market/index.html",
    text: "Версия фронт-части сайта интернет-магазина. Содержит страницы каталога, описания продукта, корзины, оформления заказа.<br>Реализация на Html5, Sass и javascript.<br>Функционал сайта находится в активной разработке",
  },
  {
    id: 5,
    name: "site-shop-html",
    image: "../assets/portfolio/img/porto-5.jpg",
    ref: "https://avbmoons.github.io/site-shop-html/index.html",
    text: "Верстка сайта интернет-магазина в составе страниц: главная, каталог, товар, корзина, регистрация пользователя.<br>Содержит, в том числе, верстку элементов фильтрации товаров по заданным категориям и параметрам.<br>Реализация на Html5 с применением препроцессора Sass.",
  },
  {
    id: 6,
    name: "site-card-html",
    image: "../assets/portfolio/img/porto-6.jpg",
    ref: "https://github.com/avbmoons/site-card-html",
    text: "Верстка сайта-визитки с главной страницей и страницей контактов.<br>На странице контактов внедрена интерактивная Яндекс карта.<br>Реализация на Html5 с применением препроцессора Sass.",
  },
  {
    id: 7,
    name: "slider-js",
    image: "../assets/portfolio/img/porto-7.jpg",
    ref: "https://avbmoons.github.io/slider-js/index.html",
    text: "Рабочий модуль для вставки на сайт слайдера с изображениями.<br>Содержит также визуальный пагинатор по слайдам.<br>Реализация на нативном JavaScript.",
  },
  {
    id: 8,
    name: "chats-news-react",
    image: "../assets/portfolio/img/porto-8.jpg",
    ref: "https://github.com/avbmoons/chats-news-react",
    text: "Клиент сайта с рабочими модулями «Групповые чаты», «Регистрация и авторизация пользователя» и «Новости».<br>Реализует регистрацию пользователя на сайте и авторизацию пользователя для работы с чатами.<br>Включает клиентскую часть мессенджера, создает групповые чаты для общения зарегистрированных пользователей, отправляет и получает сообщения в интерфейсе.<br>Для зарегистрированных пользователей доступны получение и отображение в интерфейсе новостей из заданных источников.<br>Реализация на React JS.",
  },
  {
    id: 9,
    name: "site-shop-vue",
    image: "../assets/portfolio/img/porto-9.jpg",
    ref: "https://github.com/avbmoons/site-shop-vue",
    text: "Клиент-модуль для торговли товарами из заданного каталога.<br>Реализует поиск товара в каталоге, выбор товаров для покупки, формирует корзину для оплаты.<br>Также содержит форму обратной связи с валидацией полей.<br>Реализация на Vue JS.",
  },
  {
    id: 10,
    name: "fast-food-shop-js",
    image: "../assets/portfolio/img/porto-10.jpg",
    ref: "https://github.com/avbmoons/fast-food-shop-js",
    text: "Клиент-модуль для торговли фаст-фудом.<br>Реализует выбор основного блюда, дополнительных ингредиентов к нему и формирует корзину для оплаты покупки.<br>Реализация на нативном JavaScript.",
  },
];
