new Swiper('.swiper-container',{
    spaceBetween:30,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".header").classList.toggle("open"),
        document.querySelector(".menu_header").classList.toggle("open")
    })
});

