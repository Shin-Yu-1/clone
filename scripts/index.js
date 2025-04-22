window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const itemsPerSlide = 4;

  document.body.addEventListener("click", (event) => {
    const isPrev = event.target.closest(".carousel-prev");
    const isNext = event.target.closest(".carousel-next");

    if (!isPrev && !isNext) return;

    const container = event.target.closest(".carousel-container");
    const track = container.querySelector(".carousel-track");
    const items = container.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const slideWidth = items[0].offsetWidth * itemsPerSlide;

    const matrix = window.getComputedStyle(track).transform;
    let currentX = 0;
    if (matrix !== "none") {
      currentX = parseFloat(matrix.split(",")[4]); // translateX 값
    }

    let currentIndex = Math.round(Math.abs(currentX) / slideWidth);

    if (isNext && currentIndex < Math.ceil(totalItems / itemsPerSlide) - 1) {
      currentIndex++;
    } else if (isPrev && currentIndex > 0) {
      currentIndex--;
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    const prevBtn = container.querySelector(".carousel-prev");
    const nextBtn = container.querySelector(".carousel-next");
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled =
      currentIndex >= Math.ceil(totalItems / itemsPerSlide) - 1;
  });
});
