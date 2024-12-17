const swiperContainer = document.querySelector("#swiper-wrapper");
const swiperWrapper = document.querySelector("#swiper");

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   autoplay: true,
  duration: 2,

  slidesPerView: 5,
  spaceBetween: 30,
});

const renderSwiper = () => {
  slider.map((s) => {
    swiperContainer.innerHTML += `
            <div class="swiper-slide w-1/3 h-fit p-6 flex flex-col rounded-md shadow-lg items-center justify-center">
            <img src=${s.img} alt=${s.title} class="w-10 h-fit"/>
            <h1 class="font-medium">${s.title}</h1>
            <span class="font-thin text-gray-600">${s.products}</span>
            </div>
        `;
  });
};

renderSwiper();
