import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".header").classList.toggle("open"),
        document.querySelector(".menu_header").classList.toggle("open")
    })
});

