const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
 spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
         clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    
      // إعدادات للشاشات الصغيرة
  breakpoints: {
    320: {   // موبايل صغير
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {   // موبايل متوسط
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {   // تابلت
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {   // لابتوب صغير
      slidesPerView: 3,
      spaceBetween: 25,
        },
    1200: {  // شاشات كبيرة
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});