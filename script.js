const clickable = document.querySelector(.question)
const revealed = document.querySelector(.answer)

clickable.addEventlistener("click", function() {
    revealed.classList.toggle("visible");
})