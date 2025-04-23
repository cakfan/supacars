document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-vertical", {
    direction: "vertical", // Vertical scrolling
    slidesPerView: 1, // Only 1 slide visible at a time
    spaceBetween: 16, // Space between slides
    initialSlide: 1, // Set default slide to the second one (index 1)
    mousewheel: true, // Enable mousewheel scrolling
    allowTouchMove: true, // Allow touch movements
    centeredSlides: true, // Center the active slide
    on: {
      init: function () {
        updateImageWidths(this); // important to use `this` not `swiper` here
        updateNavButtons(this);
      },
      slideChange: function () {
        updateImageWidths(this);
        updateNavButtons(this);
      },
    },
  });

  function updateImageWidths(swiperInstance) {
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide, index) => {
      const img = slide.querySelector(".slide-image");
      if (!img) return;

      if (index === swiperInstance.activeIndex) {
        img.classList.remove("w-[339px]");
        img.classList.add("w-[385px]");
      } else {
        img.classList.remove("w-[385px]");
        img.classList.add("w-[339px]");
      }
    });
  }

  function updateNavButtons(swiperInstance) {
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");

    if (swiperInstance.isBeginning) {
      prevBtn.style.opacity = "0.3";
      prevBtn.style.pointerEvents = "none";
    } else {
      prevBtn.style.opacity = "1";
      prevBtn.style.pointerEvents = "auto";
    }

    if (swiperInstance.isEnd) {
      nextBtn.style.opacity = "0.3";
      nextBtn.style.pointerEvents = "none";
    } else {
      nextBtn.style.opacity = "1";
      nextBtn.style.pointerEvents = "auto";
    }
  }

  document.getElementById("btn-prev")?.addEventListener("click", () => {
    swiper.slidePrev();
  });

  document.getElementById("btn-next")?.addEventListener("click", () => {
    swiper.slideNext();
  });
});
