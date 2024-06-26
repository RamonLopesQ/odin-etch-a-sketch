const container = document.querySelector('#container');
let rows = document.getElementsByClassName("rows");
let columns = document.getElementsByClassName("columns");
let clearButton = document.querySelector("#changeButton");

function defaultGrid(){
    makeGrid(16,16)
}

function makeGrid(rowNum,columnNum){
   
    for (let i = 0; i < rowNum; i++){
        let row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
        for (let j = 0; j < columnNum; j++){
            let column = document.createElement("div");
            column.classList.add("columns");
            column.style.backgroundColor = "#F7BE81"
            column.addEventListener("mouseenter", e => e.target.style.backgroundColor = '#BCA9F5')
            rows[i].appendChild(column);
        }
    }
}

function changeGrid(){
    let newRowSize = prompt("Enter the new row size (between 1 and 100)");
    let newColumnSize = prompt("Enter the new column size (between 1 and 100)");
    if ((newRowSize <= 100) && (newColumnSize <= 100)) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        makeGrid(newRowSize,newColumnSize);
    } else{
        alert("Insert a valid value");
        changeGrid();
    } 
}

clearButton.addEventListener("click", changeGrid)
window.onload = defaultGrid();
