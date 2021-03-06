var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorsDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#new");
var mode = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function() {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            Reset();
        }, true)
    };

    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct";
                reset.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "Try Again";
            }
        }, true)
    };
    Reset();
}


function Reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorsDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = 'steelblue';
};

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click", function() {
    Reset();
}, true);