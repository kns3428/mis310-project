const clickable = document.querySelectorAll(".question");
const revealed = document.querySelectorAll(".answer");

clickable.addEventListener("click", function() {
    revealed.classList.toggle("visible");
});
 
    /*
clickable.forEach((point) => {
    point.addEventListener("click", function() {
        revealed.classList.toggle("visible");
    });
});

*/