let modal = document.getElementById("modal");
let loginBtn = document.querySelector(".login-btn");
let mainContainer = document.getElementById("main-container");
let closeBtn = document.getElementById("close-btn");
let form = document.getElementById("form");

loginBtn.addEventListener("click", () => {
    modal.classList.add("show");
    mainContainer.style.display = "none";
})
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    mainContainer.style.display = "block";
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    setTimeout(() => {
        alert("Your response has been recorded.");
    }, 200)
})