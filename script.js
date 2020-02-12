function createGrid(x){
    const container = document.querySelector('#container');
    height = container.clientHeight;
    width = container.clientWidth;
    for (i = 0; i < x; i++) {        
        for (j = 0; j < x; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = (height / x).toString() + 'px'
            square.style.width = (width / x).toString() + 'px'
            container.appendChild(square);
        }
    }
}

function isMousingOver(){
    let tileArray = document.getElementsByClassName("square");
    for (i = 0; i < tileArray.length; i++) {
        tileArray[i].addEventListener('mouseover', changeBackgroundColor);
    }
};

function changeBackgroundColor() {
    this.style.backgroundColor = 'black';
};

function resetListener(){
    document.getElementById("reset").addEventListener("click", function(){
        dimension = prompt('What dimensions would you like your new grid to be? (maximum 100)')
        dimension = Number(dimension)
        if ((!Number.isInteger(dimension) || dimension < 0) || dimension > 100){
            alert('Please enter a number between 1 and 100');
        } else if (dimension === '' || dimension === null){
            alert('Cancelled');
        } else {
            clearGrid();
            createGrid(dimension);
            isMousingOver();
        }
    });
}

function clearGrid() {
    container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function randomColor() {
    let rgb = 'rgb(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255);
    this.style.backgroundColor = rgb
}

function mouseOverRandom() {
    let tileArray = document.getElementsByClassName("square");
    for (i = 0; i < tileArray.length; i++){
        tileArray[i].addEventListener('mouseover', randomColor);
    }
}

function randomColorListener() {
    document.getElementById('randomColor').addEventListener('click', function(){
        mouseOverRandom();
    })
}

createGrid(16);
isMousingOver();
resetListener();
randomColorListener();