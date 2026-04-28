const body = document.body;
const menuButton = document.querySelector(".hamburger-btn");
const mobileOverlay = document.getElementById("mobileOverlay");

function openDrawer() {
  body.classList.add("drawer-open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  body.classList.remove("drawer-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  if (body.classList.contains("drawer-open")) {
    closeDrawer();
    return;
  }
  openDrawer();
});

mobileOverlay.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeDrawer();
  }
});

const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll(".slider-dot"));
const prevArrowButton = document.querySelector(".slider-arrow-prev");
const nextArrowButton = document.querySelector(".slider-arrow-next");
let currentSlideIndex = 0;
let autoSlideTimer = null;

function setActiveSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });

  currentSlideIndex = index;
}

function goToNextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length;
  setActiveSlide(nextIndex);
}

function goToPrevSlide() {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  setActiveSlide(prevIndex);
}

function startAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
  }
  autoSlideTimer = setInterval(goToNextSlide, 4000);
}

if (slides.length > 0 && dots.length > 0 && prevArrowButton && nextArrowButton) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      startAutoSlide();
    });
  });

  prevArrowButton.addEventListener("click", () => {
    goToPrevSlide();
    startAutoSlide();
  });

  nextArrowButton.addEventListener("click", () => {
    goToNextSlide();
    startAutoSlide();
  });

  setActiveSlide(0);
  startAutoSlide();
}
