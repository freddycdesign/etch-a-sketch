console.log("link test");

const gridContainer = document.getElementById("gridContainer");

//gridBox.style.backgroundColor = "black";
//gridBox.style.width = "200px";
alert("Enter number of blocks per side");
const userInput = prompt()
const numOfBlocks = userInput
const newWidth = 600 / numOfBlocks

function addBoxes(row) {
    for (let i = 0; i < row * row; i++) {
        const gridBox = document.createElement("div");
        gridContainer.appendChild(gridBox);
        gridBox.classList.add("gridBox");
        gridBox.style.width = newWidth + "px";
    }
}

//gridBox.style.width = newWidth + "px";


addBoxes(numOfBlocks);
console.log(newWidth);
console.log(gridContainer.clientWidth);