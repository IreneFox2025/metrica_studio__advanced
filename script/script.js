const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");

const popup = document.querySelector("#popup");
const button_order_service = document.querySelector("#order_service");
const popup_form = document.querySelector("#popup_inp_wrapper");

const close_btn = document.querySelector(".popup__close_btn");
const popup_content = document.querySelector("#popup_content");

const burger_btn = document.querySelector(".burger_btn");
const burger_menu = document.querySelector(".burger");

const burger_content = document.querySelector("#burger_content");

const burger_links = document.querySelectorAll(".burger_menu_item");

prev.style.backgroundImage = "url('./assets/pictures/prev.png')";
next.style.backgroundImage = "url('./assets/pictures/next.png')";

const galleryInfo = [
  "Проект двухкомнатной квартиры в ЖК Лесной Пейзаж",
  "Проект гостиной в ЖК Маяк",
  "Визуализация кухни-гостиной в частном доме",
  "Проект кухни в скандинавском стиле для ЖК Северный Ветер",
];

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: next,
    prevEl: prev,
  },

  on: {
    slideChange: function () {
      document.querySelector("#swiper_info").textContent =
        galleryInfo[this.realIndex];
    },
  },
});

button_order_service.addEventListener("click", () => {
  popup.showModal();
  document.body.style.overflow = "hidden";
});

popup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("The form has been filled correctly, thank you!");
  popup_form.reset();
  popup.close();
  document.body.style.overflow = "";
});

close_btn.addEventListener("click", () => {
  popup.close();
  document.body.style.overflow = "";
});

popup.addEventListener("click", (event) => {
  const rect = popup_content.getBoundingClientRect();

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    popup.close();
    document.body.style.overflow = "";
  }
});

burger_btn.addEventListener("click", () => {
  burger_menu.classList.toggle("burger_opened");
  burger_btn.classList.toggle("burger_btn_opened");

  if (burger_menu.classList.contains("burger_opened")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

burger_menu.addEventListener("click", (event) => {
  const rect = burger_content.getBoundingClientRect();

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    burger_menu.classList.remove("burger_opened");
    burger_btn.classList.remove("burger_btn_opened");
    document.body.style.overflow = "";
  }
});

burger_links.forEach((link) => {
  link.addEventListener("click", () => {
    burger_menu.classList.remove("burger_opened");
    burger_btn.classList.remove("burger_btn_opened");
    document.body.style.overflow = "";
  });
});
