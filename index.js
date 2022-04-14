
const slides = document.querySelectorAll(".slide")
const leftSlide = document.querySelector("button.left")
const rightSlide = document.querySelector("button.right")
let intervalTime = 5000
let slideInterval;

const nextSlide = () =>{
    const current = document.querySelector('.current')
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    }else{
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
};


const prevSlide = () =>{
    const current = document.querySelector('.current')
    current.classList.remove('current')
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    }else{
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
  
};


leftSlide.addEventListener("click", e =>{
    nextSlide() 
});

rightSlide.addEventListener("click", e =>{
    prevSlide() 
});