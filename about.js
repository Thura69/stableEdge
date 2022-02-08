const aTag = document.querySelectorAll('.header-2 ul li a');
const lifeLine = document.querySelector('.life-line');
const menu = document.querySelector('.menu');
const line = document.querySelectorAll(".line");
const menuShower = document.querySelector(".menu-shower");


lifeLine.style.width = aTag[3].offsetWidth + 'px';
lifeLine.style.left = aTag[3].offsetLeft + 'px';

aTag.forEach(e=>{
    console.log(e.offsetWidth)
    e.addEventListener("click",()=>{
        console.log(e.offsetLeft);
        console.log(e.offsetWidth);
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
