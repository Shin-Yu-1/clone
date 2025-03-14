window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  const items = document.querySelectorAll(".carousel-item");
  const itemsPerSlide = 4; // 한 번에 보이는 이미지 개수
  const totalItems = items.length;
  let currentIndex = 0;

  // 한 번 이동할 거리 계산
  const slideWidth = items[0].offsetWidth * itemsPerSlide;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= Math.ceil(totalItems / itemsPerSlide) - 1;
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < Math.ceil(totalItems / itemsPerSlide) - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  updateCarousel(); // 초기 상태 업데이트
});
