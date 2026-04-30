const hamburgerBtn = document.querySelector("#hamburgerBtn");
const drawerCloseBtn = document.querySelector("#drawerCloseBtn");
const drawerOverlay = document.querySelector("#drawerOverlay");
const mobileDrawer = document.querySelector("#mobileDrawer");
const drawerMenuLinks = document.querySelectorAll(".drawer-menu a");

function openDrawer() {
    drawerOverlay.classList.add("is-open");
    mobileDrawer.classList.add("is-open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
}

function closeDrawer() {
    drawerOverlay.classList.remove("is-open");
    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
}

if (hamburgerBtn && drawerCloseBtn && drawerOverlay && mobileDrawer) {
    hamburgerBtn.addEventListener("click", openDrawer);
    drawerCloseBtn.addEventListener("click", closeDrawer);
    drawerOverlay.addEventListener("click", closeDrawer);

    drawerMenuLinks.forEach((link) => {
        link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDrawer();
        }
    });
}

if (typeof Swiper !== "undefined") {
    new Swiper(".swiper", {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
