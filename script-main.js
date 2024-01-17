console.log("link test");

const gridContainer = document.getElementById("gridContainer");

//gridBox.style.backgroundColor = "black";
//gridBox.style.width = "200px";

function addBoxes(row) {
    for (let i = 0; i < row * row; i++) {
        const gridBox = document.createElement("div");
        gridContainer.appendChild(gridBox);
        gridBox.classList.add("gridBox");
        //gridBox.style.width = 150 + "px";
    }
}

addBoxes(3);

console.log(gridContainer.clientWidth);