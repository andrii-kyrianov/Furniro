// // Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });
// ---------------------------------------------------------------------

// Підключення слайдера
import Swiper from './modules/slider.js';

// --------------------------------------------------------------------

// форма пошуку
import btnSearch from './modules/btn_search';
btnSearch();

// --------------------------------------------------------------------

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// фільтр ціни-----------------------------------------------
import noUiSlider from './modules/range_slider.js';


// скріпти-------------------------------------

// код для фільтра
const filtr = document.querySelector('.filter__sort-btn');
const filterContent = document.querySelector('.filter-content');
const topBtn = document.querySelector('.filter-content__top-btn');

// Перевіримо наявність елементів перед тим, як додавати обробники подій
if (filtr && filterContent) {
    filtr.onclick = function() {
        filterContent.classList.toggle('filter-content-hiden');
    };
}

if (topBtn && filterContent) {
    topBtn.onclick = function() {
        filterContent.classList.add('filter-content-hiden');
    };
}

// Для всіх кнопок зі спойлером
document.querySelectorAll(".filter-content__spoiler-btn").forEach(button => {
    if (button) {
        button.addEventListener("click", function() {
            const wrapper = this.nextElementSibling;
            if (wrapper) {
                wrapper.classList.toggle("filter-content__spoiler-checkbox-wraper-active");
            }
            this.classList.toggle("filter-content__spoiler-btn-activ");
        });
    }
});

// код для додавання кількості товару
document.addEventListener("DOMContentLoaded", function() {
    let decreaseBtn = document.getElementById("decrease");
    let increaseBtn = document.getElementById("increase");
    let quantityInput = document.getElementById("quantity");


    if (!decreaseBtn || !increaseBtn || !quantityInput) {
        return;
    }

    decreaseBtn.addEventListener("click", function() {
        let value = parseInt(quantityInput.value) || 1;
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    increaseBtn.addEventListener("click", function() {
        let value = parseInt(quantityInput.value) || 0;
        quantityInput.value = value + 1;
    });

    quantityInput.addEventListener("input", function() {
        let value = this.value.replace(/[^0-9]/g, "");
        this.value = value < 1 ? 1 : value;
    });
});

// код для табів на сторінці твару
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".product-description__btn");
    const contents = document.querySelectorAll(".product-description__content");
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        
        buttons.forEach(btn => btn.classList.remove("active"));
        
        button.classList.add("active");
  
        
        contents.forEach(content => content.classList.add("hiden"));
        
        contents[index].classList.remove("hiden");

      });
    });
  });


