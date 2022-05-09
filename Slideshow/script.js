let slideIdx = 0;
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
console.log(slides);
leftBtn.addEventListener("click", () => {
    slideIdx--;
    changeSlides();
})
rightBtn.addEventListener("click", () => {
    slideIdx++;
    changeSlides();
})
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIdx = index;
        changeSlides(slideIdx);
    })
})

function changeSlides() {
    if(slideIdx >= slides.length) {
        slideIdx = 0;
    }
    else if(slideIdx < 0) {
        slideIdx = slides.length-1;
    }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if(dots[i].classList.contains("active")) {
            dots[i].classList.remove("active");
        }
    }
    slides[slideIdx].style.display = "block";
    dots[slideIdx].classList.add("active");
    // For automatic slide change after 2s
    // setTimeout(() => {
    //     slideIdx++;
    //     changeSlides();
    // }, 2000);
}
changeSlides();
