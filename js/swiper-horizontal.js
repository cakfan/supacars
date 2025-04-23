document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-horizontal", {
    slidesPerView: "auto",
    spaceBetween: 21, // Space between slides
    mousewheel: true, // Enable mousewheel scrolling
    allowTouchMove: true, // Allow touch movements
    on: {
      init: function () {
        updateButton(this); // here `this` is correct
      },
      slideChange: function () {
        updateButton(this);
      },
    },
  });

  function updateButton(swiperInstance) {
    const prevBtn = document.getElementById("btn-prev-horiz");
    const nextBtn = document.getElementById("btn-next-horiz");

    if (swiperInstance.isBeginning) {
      // First slide — disable prev
      prevBtn.classList.remove(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );
      prevBtn.classList.add("bg-head/[0.08]");

      nextBtn.classList.remove("bg-head/[0.08]");
      nextBtn.classList.add(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );
    } else if (swiperInstance.isEnd) {
      // Last slide — disable next
      nextBtn.classList.remove(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );
      nextBtn.classList.add("bg-head/[0.08]");

      prevBtn.classList.remove("bg-head/[0.08]");
      prevBtn.classList.add(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );
    } else {
      // In between
      prevBtn.classList.remove("bg-head/[0.08]");
      prevBtn.classList.add(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );

      nextBtn.classList.remove("bg-head/[0.08]");
      nextBtn.classList.add(
        "bg-primary",
        "cursor-pointer",
        "hover:shadow-primary"
      );
    }
  }

  document.getElementById("btn-prev-horiz")?.addEventListener("click", () => {
    swiper.slidePrev();
  });

  document.getElementById("btn-next-horiz")?.addEventListener("click", () => {
    swiper.slideNext();
  });
});
