const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");

prev.style.backgroundImage = "url('../assets/pictures/prev.png')";
next.style.backgroundImage = "url('../assets/pictures/next.png')";


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
