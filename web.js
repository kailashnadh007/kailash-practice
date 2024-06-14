let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + items.length) % items.length;
  const newPosition = -currentIndex * 100;
  document.querySelector('.carousel-items').style.transform = `translateX(${newPosition}%)`;
}