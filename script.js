
defaultGridSize = 256;
const container = document.querySelector('.container');
const gridSquare = document.querySelectorAll('.square');
const button = document.querySelector('#gridBtn');

function createNewGrid(gridSize) {
  const gridTotal = gridSize**2;
  for (i = 1; i <= gridTotal; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id',`square-${i}`);
    square.style.flexBasis = `${100 / gridSize}%`;
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    })
  } 
}

button.addEventListener('click', () => {
  container.innerHTML = '';
  let newGridSize = prompt('Please enter the grid size you want (must be under 100):');
  if (newGridSize > 100) {
    newGridSize = alert(`${newGridSize} is over 100. Try again!`)
    createNewGrid(16);
  } else {
    createNewGrid(newGridSize);
  }
})

window.addEventListener('load', createNewGrid(16));