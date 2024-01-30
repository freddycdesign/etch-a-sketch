const gridContainer = document.getElementById("gridContainer");
const blackCheckbox = document.getElementById("black");
const colorCheckbox = document.getElementById("randomColor")

function addBoxes(numOfBlocks) {
    const newWidth = 600 / numOfBlocks;

    for (let i = 0; i < numOfBlocks * numOfBlocks; i++) {
        const gridBox = document.createElement("div");
        gridContainer.appendChild(gridBox);
        gridBox.classList.add("gridBox");
        gridBox.style.width = newWidth + "px";
    }
    console.log("Each box is " + newWidth + "px x " + newWidth + "px");

    const divBox = document.querySelectorAll(".gridBox")

    blackCheckbox.addEventListener("change", () => {
        if (blackCheckbox.checked) {
            divBox.forEach((divBox) => {
                divBox.addEventListener('mouseover', () => {
                    divBox.style.backgroundColor = "black";
                })
            });
        }
    })
    colorCheckbox.addEventListener("change", () => {
        if (colorCheckbox.checked) {
            divBox.forEach((divBox) => {
                divBox.addEventListener('mouseover', () => {
                    divBox.style.backgroundColor = getRandomColor()
                })

            })
        }
    })

}

function getRandomColor() {
    // Generate random values for red, green, and blue
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create the color string in the format "rgb(red, green, blue)"
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

function promptForBlocks() {
    alert("Enter number of blocks per side");
    const userInput = prompt()
    return parseInt(userInput);

}

const resetGrid = document.getElementById("resetGrid");
resetGrid.addEventListener('click', () => {
    const numOfBlocks = promptForBlocks();
    gridContainer.innerHTML = ""; // Clear the existing grid
    addBoxes(numOfBlocks);
    colorCheckbox.checked = false;
    blackCheckbox.checked = false;
})

const numOfBlocks = promptForBlocks();
addBoxes(numOfBlocks);