const clickable = document.querySelectorAll(".question");
const revealed = document.querySelectorAll(".answer");

    
clickable.forEach((point) => {
    point.addEventListener("click", function() {
        revealed.classList.toggle("visible");
    });
});