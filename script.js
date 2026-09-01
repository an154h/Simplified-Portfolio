const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.carousel-arrow.prev');
const nextButton = document.querySelector('.carousel-arrow.next');

let currentIndex = 0;

function updateCarousel() {
  if (!track || slides.length === 0) return;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

updateCarousel();