const toggleLinks = (key, window) => {
  if (key === true) {
    gsap.to(".link", {
      x: 0,
      opacity: key ? 1 : 0,
      ease: "back.inOut",
      stagger: 0.25,
    });

    gsap.to(".slide", {
      backgroundColor: "white",
    });
  } else {
    gsap.to(".link", {
      x: window > 760 ? 0 : "-48rem",
      ease: "back.inOut",
      stagger: {
        amount: 1,
        from: "end",
        ease: "back1.inOut",
      },
    });
    gsap.to(".slide", {
      backgroundColor: "transparent",
      delay: 1.3,
    });
  }
};

const toggleHamburger = (key) => {
  gsap.to(".span", {
    stagger: 0.25,
  });
  if (key === true) {
    gsap.to(".top-span", {
      x: "-5px",
      y: "6px",
      rotate: 45,
    });
    gsap.to(".middle-span", {
      width: 0,
    });
    gsap.to(".bottom-span", {
      x: "-5px",
      y: "-10px",
      rotate: -45,
    });
  } else {
    gsap.to(".top-span", {
      x: 0,
      y: 0,
      rotate: 0,
    });
    gsap.to(".middle-span", {
      width: "32px",
    });
    gsap.to(".bottom-span", {
      x: 0,
      y: 0,
      rotate: 0,
    });
  }
};

gsap.to(".title", {
  x: 0,
  opacity: 1,
  duration: 1,
});
gsap.to(".desc", {
  y: 0,
  opacity: 1,
  delay: 0.5,
});

gsap.to(".cta", {
  x: 0,
  opacity: 1,
  delay: 1,
});
gsap.to(".ak", {
  opacity: 1,
  delay: 1.5,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 25,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  focusableElements: "button",
  spaceBetween: 50,
});
