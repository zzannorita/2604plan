(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var backdrop = document.getElementById("nav-backdrop");

  if (!header || !toggle || !backdrop) return;

  function setHeaderBarHeight() {
    header.style.setProperty("--header-bar-h", header.offsetHeight + "px");
  }

  function isMobileNav() {
    return window.matchMedia("(max-width: 1100px)").matches;
  }

  function openMenu() {
    header.classList.add("is-menu-open");
    backdrop.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "메뉴 닫기");
    document.documentElement.style.overflow = "hidden";
  }

  function closeMenu() {
    header.classList.remove("is-menu-open");
    backdrop.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
    document.documentElement.style.overflow = "";
  }

  function toggleMenu() {
    if (!isMobileNav()) return;
    if (header.classList.contains("is-menu-open")) closeMenu();
    else openMenu();
  }

  toggle.addEventListener("click", function () {
    toggleMenu();
  });

  backdrop.addEventListener("click", function () {
    closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("is-menu-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    setHeaderBarHeight();
    if (!isMobileNav()) closeMenu();
  });

  window.addEventListener(
    "load",
    function () {
      setHeaderBarHeight();
    },
    { once: true }
  );
  setHeaderBarHeight();

  var menuLinks = document.querySelectorAll("#primary-menu a[href]");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (isMobileNav() && header.classList.contains("is-menu-open")) {
        closeMenu();
      }
    });
  });
})();

(function () {
  function initBestSwiper() {
    if (typeof Swiper === "undefined") return;
    var root = document.querySelector(".best-swiper");
    if (!root) return;

    new Swiper(".best-swiper", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 520,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".best-swiper__btn--next",
        prevEl: ".best-swiper__btn--prev",
      },
      pagination: {
        el: ".best-swiper__pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          spaceBetween: 14,
        },
        480: {
          spaceBetween: 18,
        },
        900: {
          spaceBetween: 22,
        },
      },
    });
  }

  function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;

    function update() {
      var show = window.scrollY > 320;
      btn.classList.toggle("is-visible", show);
      btn.setAttribute("aria-hidden", show ? "false" : "true");
      btn.tabIndex = show ? 0 : -1;
    }

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initBestSwiper();
      initBackToTop();
    });
  } else {
    initBestSwiper();
    initBackToTop();
  }
})();
