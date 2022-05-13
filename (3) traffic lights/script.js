
const mainSquare = document.getElementById("mainSquare");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

red.addEventListener("click", function () {
    mainSquare.style.borderColor = 'red';
})
 
blue.addEventListener("click", function () {
    mainSquare.style.borderColor = 'blue';
})

green.addEventListener("click", function () {
    mainSquare.style.borderColor = 'green';
})
