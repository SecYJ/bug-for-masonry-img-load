const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides:true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });