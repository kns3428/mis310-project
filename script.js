const clickable = document.querySelectorAll(".question");
const revealed = document.querySelectorAll(".answer");

    
clickable.forEach((clickable) => {
    clickable.addEventListener("click", function() {
        revealed.classList.toggle("visible");
    });
});