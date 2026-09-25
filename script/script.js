const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");

const popup = document.querySelector("#popup");
const button = document.querySelector("#order_service");

const close_btn = document.querySelector(".popup__close_btn");
const popup_content = document.querySelector("#popup_content");

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

button.addEventListener("click", () => {
  popup.showModal();
  document.body.style.overflow = 'hidden';
});

close_btn.addEventListener("click", () => {
  popup.close();
  document.body.style.overflow = '';
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
    document.body.style.overflow = '';
  }
});

