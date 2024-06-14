const container = document.querySelector("#container");
const button = document.querySelector("#choice");
const restartButton = document.querySelector("#restart")

const colorClasses = [
    "colored1", "colored2", "colored3", "colored4", "colored5", "colored6",
    "colored7", "colored8", "colored9", "colored10", "colored11", "colored12",
    "colored13", "colored14", "colored15", "colored16"
];

// To prevent the overlaying of grid
function removeGrid() {
    const rows = document.querySelectorAll(".row");

    for (let row of rows) {
      container.removeChild(row);
    }
}

// making the grid
function makeGrid( number = 4 ) {
  for ( i = 0; i < number; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < number; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseenter", () => {
        colorClasses.forEach(colorclass => column.classList.remove(colorclass));
        const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        column.classList.add(randomColor);
      });
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}


// To reset the grid from the beginnig
function resetGrid() {
  const columns = document.querySelectorAll("#container .column");
  columns.forEach(column => {
    column.classList.remove(
      "colored1", "colored2", "colored3", "colored4", 
            "colored5", "colored6", "colored7", "colored8", 
            "colored9", "colored10", "colored11", "colored12", 
            "colored13", "colored14", "colored15", "colored16"
    );
  });
}

restartButton.addEventListener("click", () => {
  resetGrid();
});

// Event to the user
button.addEventListener("click", () => {
  const number = prompt("Enter the desired no. of squares (Max value is  100, Min value is 10 ): ");
  if (number === null) {
    return;
  }
  const parseNumber = parseInt(number);
  if (isNaN(parseNumber) || parseNumber < 10 || parseNumber > 100) {
    alert("You need to enter a number between 10 and 100.");
  } else {
    removeGrid();
    makeGrid(parseNumber);
  }
  
});

makeGrid();
