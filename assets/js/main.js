// @@@@@@@@@@@@@@@@@ show & remove menu @@@@@@@@@@@@@@@@@@@
const navtoggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu');

navtoggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// When we click on each nav__link, we remove the show-menu class
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', linkActive);
});

function linkActive() {
  navMenu.classList.remove('show-menu');
}

// @@@@@@@@@@@@@@@@@ CHANGE BACKGROUND HEADER  @@@@@@@@@@@@@@@@@@@
//  When the scroll is greater than 50 viewport height,
//  add the scroll-header class to the header tag
const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@ swiperjs.com  @@@@@@@@@@@@@@@@@
/* @@@@@@@@@@@@@@@ home swiper@@@@@@@@@@@@@@@ */
let homeControl = new Swiper('.home__control', {
  spaceBetween: 15,
  slidesPerView: 3,
  loop: true,

  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
});

let homeSwiper = new Swiper('.home__swiper', {
  loop: true,
  effect: 'fade',

  thumbs: {
    swiper: homeControl,
  },
});

/* @@@@@@@@@@@@@@@ home popup @@@@@@@@@@@@@@@ */
const homePopup = document.getElementById('home-popup'),
  homePopupClose = document.getElementById('home-popup-close'),
  homeVideoBtns = document.querySelectorAll('.home__video-btn');

homeVideoBtns.forEach((b) => {
  b.addEventListener('click', () => {
    homePopup.classList.add('show-popup');
  });
});

homePopupClose.addEventListener('click', () => {
  homePopup.classList.remove('show-popup');
});

// @@@@@@@@@@@@@@@ swiperjs.com  @@@@@@@@@@@@@@@@@
/* @@@@@@@@@@@@@@@ discover swiper @@@@@@@@@@@@@@@ */
let discoverSwiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 10,

  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// @@@@@@@@@@@@@@@@@@@ video @@@@@@@@@@@@@@@@@@@@
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

videoButton.addEventListener('click', playPause);

function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.classList.add('bx-pause');
    videoIcon.classList.remove('bx-play');
  } else {
    videoFile.pause();
    videoIcon.classList.add('bx-play');
    videoIcon.classList.remove('bx-pause');
  }
}

// when the video ends
videoFile.addEventListener('ended', finalVideo);

function finalVideo() {
  videoIcon.classList.add('bx-play');
  videoIcon.classList.remove('bx-pause');
}

// @@@@@@@@@@@@@@@@@@@ scroll up @@@@@@@@@@@@@@@@@@@@
window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

// @@@@@@@@@@@@@@@ GSAP (greensock.com) @@@@@@@@@@@@@@@@@
// when we click on homecontrols
const homeControls = document.querySelectorAll('.home__control-slide img');

function homeAnimation() {
  gsap.from('.home__subtitle', {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from('.home__title', { opacity: 0, duration: 0.4, delay: 0.4, y: -20 });
  gsap.from('.home__description', {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from('.home__btn', { opacity: 0, duration: 0.6, delay: 0.6, y: -20 });
  gsap.from('.home__video-btn', {
    opacity: 0,
    duration: 0.7,
    delay: 0.7,
    y: -20,
  });

  homePopup.classList.remove('show-popup');
}

homeControls.forEach((c) => {
  c.addEventListener('click', homeAnimation);
});

// when page reload
gsap.from('.home__subtitle', {
  opacity: 0,
  duration: 0.3,
  delay: 0.3,
  y: -20,
});
gsap.from('.home__title', {
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
  y: -20,
});
gsap.from('.home__description', {
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  y: -20,
});
gsap.from('.home__btn', { opacity: 0, duration: 0.6, delay: 0.6, y: -20 });
gsap.from('.home__video-btn', {
  opacity: 0,
  duration: 0.7,
  delay: 0.7,
  y: -20,
});
