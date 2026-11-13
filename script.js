const clickable = document.querySelector(".question");
const revealed = document.querySelector(".answer");

    
clickable.forEach((clickable) => {
    clickable.addEventListener("click", function() {
        revealed.classList.toggle("visible");
    });
});