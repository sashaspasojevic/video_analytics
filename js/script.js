const navBtn = document.querySelector("#nav_btn");
const closeBtn = document.querySelector("#close_btn");
const sidebar = document.querySelector("#sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar_links li a");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
});

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// modal

const modalBtn = document.querySelector(".hover-effect");
const modalOverlay = document.querySelector(".modal__overlay");
const closeModal = document.querySelector(".modal__btn");
const modalVideo = document.querySelector("#video");

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open__modal");
  modalVideo.src = "https://www.youtube.com/embed/9h9WKDm3lR4?autoplay=1";
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("open__modal");
  modalVideo.src = ""; // This will stop the video
});

// scroll

const section = document.querySelectorAll("section");

const showSection = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  section.forEach((item) => {
    const sectionTop = item.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      item.classList.add("showSection");
    } else {
      item.classList.remove("showSection");
    }
  });
};

window.addEventListener("scroll", showSection);

// go to address

document
  .getElementById("contact__info-button")
  .addEventListener("click", function () {
    var address = "Stefana Stefanovica 2 Novi Sad";

    var mapUrl = "https://www.google.com/maps?q=" + encodeURIComponent(address);

    window.open(mapUrl, "_blank");
  });

// wave effect

const labels = document.querySelectorAll(".contact__form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    })
    .join("");
});

// set year
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();

// go to top
const goToTop = document.querySelector(".goToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    goToTop.classList.add("showGTT");
  } else {
    goToTop.classList.remove("showGTT");
  }
});
