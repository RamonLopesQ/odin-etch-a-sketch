const container = document.querySelector('#container');
let rows = document.getElementsByClassName("rows");
let columns = document.getElementsByClassName("columns");
let clearButton = document.querySelector("#changeButton");

function makeGrid(gridNum){
    let cellSize = ((480/gridNum)-2).toFixed(2);
    let gridSize = 480;
    for (let i = 0; i < gridNum; i++){
        let row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
        container.style.height = gridSize + "px"
        container.style.width = gridSize + "px"
        for (let j = 0; j < gridNum; j++){
            let column = document.createElement("div");
            column.classList.add("columns");
            column.style.backgroundColor = "#F7BE81";
            column.style.height = cellSize + "px";
            column.style.width = cellSize + "px";
            column.addEventListener("mouseenter", e => e.target.style.backgroundColor = '#BCA9F5')
            rows[i].appendChild(column);
        }
    }
}

function changeGrid(){
    let newSize = prompt("Enter the new row size (between 1 and 100)");
    
    if (newSize <= 100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        makeGrid(newSize);
    } else{
        alert("Insert a valid value");
        changeGrid();
    } 
}

clearButton.addEventListener("click", changeGrid)
window.onload = makeGrid(16);
