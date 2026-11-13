const clickable = document.querySelectorAll(".question");
 
clickable.forEach((point) => {
    point.addEventListener("click", function() {
        point.nextElementSibling.classList.toggle("visible");
    });
});