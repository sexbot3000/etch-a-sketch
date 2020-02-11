// create a grid with x dimension
function createGrid(x){

    const container = document.querySelector('#container');
    height = container.clientHeight;
    width = container.clientWidth;

    for (i = 0; i < x; i++) {
        // create the grids row
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');

        for (j = 0; j < x; j++) {
            // create each square and set width & height
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = (height / x).toString() + 'px'
            square.style.width = (width / x).toString() + 'px'
            gridRow.appendChild(square);
            
        }
        // after each iteration, append the row
        container.appendChild(gridRow);
    }
    
}

function changeBackgroundColor() {
    this.style.backgroundColor = 'black';
};



createGrid(16);

// check for a mouseover event and change the background color when you get it
let tileArray = document.getElementsByClassName("square");

for (i = 0; i < tileArray.length; i++) {
    tileArray[i].addEventListener('mouseover', changeBackgroundColor);
}
