const container = document.querySelector('#container');

// create a grid 16x16
function createGrid(){
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const rowSquare = document.createElement('div');
            rowSquare.classList.add('rowSquare');
            container.appendChild(rowSquare);
        }
    }
}

createGrid()