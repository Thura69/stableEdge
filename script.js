const aTag = document.querySelectorAll('.header-2 ul li a');
const lifeLine = document.querySelector('.life-line');
const menu = document.querySelector('.menu');
const line = document.querySelectorAll(".line");
const menuShower = document.querySelector(".menu-shower");
const userSelectPhotos = document.querySelectorAll(".select-photos li");
const showPhotos = document.querySelector(".show-photos img");




lifeLine.style.width = aTag[0].offsetWidth + 'px';
lifeLine.style.left = aTag[0].offsetLeft + 'px';

aTag.forEach(e=>{
    console.log(e.offsetWidth)
    e.addEventListener("click",()=>{
        lifeLine.style.width = e.offsetWidth + 'px';
        lifeLine.style.left = e.offsetLeft + 'px';
    })
})

menu.addEventListener("click",()=>{
    menuShower.classList.toggle("active");
  if(!menu.classList.contains("ok")){
    line[1].style.opacity = 0 ;
    line[0].style.transform = 'rotate(40deg) translate(15px)';
    line[2].style.transform = 'rotate(-40deg) translate(15px)';
    menu.classList.add("ok");
  }else{
    line[1].style.opacity = 1 ;
    line[0].style.transform = 'rotate(0) translate(0)';
    line[2].style.transform = 'rotate(0) translate(0)';
    menu.classList.remove("ok");
  }
})


const swiper = new Swiper('.new-swiper', {
  // Optional parameters
  spaceBetween:24,
  loop:true,
  slidesPerView:'auto',
  centeredSlides:true,

  // If we need pagination

});


userSelectPhotos.forEach(e=>{
  e.addEventListener("click",()=>{
    const img = e.children[0].src;
    showPhotos.src = img;
  })
})