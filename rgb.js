var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

//mode button event listeners
function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

//sets up colors of squares when user clicks
function setupSquares () {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to sqaures
		squares[i].addEventListener("click", function () {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor
			//compare color topickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play again?"
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again!";
			  }
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours"
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove("hidden");
		if (colors[i]) {
		squares[i].style.backgroundColor = colors[i];
		} else  {
		squares[i].classList.add("hidden");
		}
	}
}


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array. repeated num times
	for (var i = 0; i < num; i++) {
	//get random color and push into array
	arr.push(randomColor())
	}
	//return array at end
	return arr;
}

function randomColor(){
	//pick 3 values from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return  "rgb(" + r + ", " + g + ", " + b +")";
}
