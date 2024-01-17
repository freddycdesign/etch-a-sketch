const gridContainer = document.getElementById("gridContainer");
//gridBox.style.backgroundColor = "black";

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

addBoxes(numOfBlocks);
console.log("Each box is " + newWidth + "px x " + newWidth + "px");

const resetGrid = document.getElementById("resetGrid");
resetGrid.addEventListener('click', () => {
    window.location.reload();
})