const slider = document.querySelector('.popular-products .slider');

const products = slider.querySelectorAll('.catalog-item');
const buttonPrev = slider.querySelector('.slider-button-prev');
const buttonNext = slider.querySelector('.slider-button-next');
let productsTotal = products.length;
let currentSlideNumber = 1;

const toggleHideSlide = function() {
  products[currentSlideNumber - 1].classList.toggle('hidden');
}

buttonPrev.addEventListener('click', function() {
  toggleHideSlide();

  if (currentSlideNumber === 1) {
    currentSlideNumber = productsTotal;
  } else {
    currentSlideNumber--;
  }
  toggleHideSlide();
});

buttonNext.addEventListener('click', function() {
  toggleHideSlide();

  if (currentSlideNumber === productsTotal) {
    currentSlideNumber = 1;
  } else {
    currentSlideNumber++;
  }
  toggleHideSlide();
});
