import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.rooms__swiper',{
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        720: {
          slidesPerView: 1.5,
          spaceBetween: 24
        },
      }
});


const mainSwiper = new Swiper('.product-view__swiper', {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
});


const thumbnailSwiper = new Swiper('.product-view__thumbnail-swiper', {
  spaceBetween: 32,
  slidesPerView: 4,
  direction: 'vertical', 
  slideToClickedSlide: true, 
  mousewheel: true,
});

// Додати подію кліку на мініатюри для зміни основного зображення
thumbnailSwiper.on('click', function (event) {
  // Знаходимо індекс обраної мініатюри
  const clickedIndex = thumbnailSwiper.clickedIndex;

  // Перемикаємо головне зображення в основному слайдері
  mainSwiper.slideTo(clickedIndex);
});
