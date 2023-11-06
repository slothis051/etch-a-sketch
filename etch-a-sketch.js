const main = document.querySelector('#main');
const inputBar = document.querySelector('#inputBar');
let warningMessage = document.querySelector("#warning");
let gridNum = 16;


let inputButton = document.querySelector('#inputButton');
if (inputBar) {
    inputButton.addEventListener('click', ()=>{
        createGrid(inputBar.value);
    } );
}

function createGrid(gridSize){
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
    if (gridSize <= 100) {
        for(let i=0; i<gridSize; i++) {
            let mainRow = document.createElement('div');
            mainRow.classList.add('mainRow');
            main.appendChild(mainRow);
            for(let j=0; j<gridSize; j++) {
                let mainCol = document.createElement('div');
                mainCol.classList.add("box");
                mainCol.style = `flex: 0 1 ${720/gridSize}px`;
                mainRow.appendChild(mainCol);
            }
        }
        draw();
    } else {
        warningMessage.textContent = "Warning! Grid size should not exceed 100!";
    }        

    function draw(){
        let boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                box.addEventListener('mouseover', () => {
                    box.style.background = "pink";
                });
                box.addEventListener('mouseout', () => {
                    setTimeout( () => {
                        box.style.background = "transparent";
                    }, 250);
                });
            });
    }
}