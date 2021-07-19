const hotelSlider = new Swiper('.hotel-slider', {
  // Optional paramlider
  loop: true,
  slidePerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional paramlider
  loop: true,
  slidePerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});