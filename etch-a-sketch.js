const main = document.querySelector('#main');

for(let i=0; i<16; i++) {
    let mainRow = document.createElement('div');
    mainRow.style = "display: flex; margin: -1px 0px; flex: 1 0 50px;"
    main.appendChild(mainRow);
    for(let j=0; j<16; j++) {
        let mainCol = document.createElement('div');
        mainCol.style = "border-style: solid; flex: 0 1 50px;"
        mainCol.classList.add("box");
        mainRow.appendChild(mainCol);
    }
}

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
