

const container = document.querySelector('.container');
const gridSquares = document.querySelectorAll('.square');
const button = document.querySelector('#gridBtn');


// random rgb color generator`
function randomColorGenerator(min=0, max=255) {
  let rgbArray = [];
  for (i = 1; i <= 3; i++) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    rgbArray.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
  }
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}

// function darkenSquare(squareId) {
//   const square = document.querySelector(`#${squareId}`);
//   square.style.opacity = square.style.opacity - .1;
//   console.log(square.style.opacity)
// }

function draw(squareId) {
  const square = document.querySelector(`#${squareId}`)
  square.style.backgroundColor = randomColorGenerator();
  square.addEventListener('mouseover', () => {
    square.style.opacity = String(Number(square.style.opacity) - .02);
  })
}

function createNewGrid(gridSize) {
  // calculate total grid size
  const gridTotal = gridSize**2;
  // create squares with class/ids, flex-basis, append to container, add event listener
  for (i = 1; i <= gridTotal; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id',`square-${i}`);
    square.style.opacity = "1";
    square.style.flexBasis = `${100 / gridSize}%`;
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
      draw(square.id);
    })
  } 
}

// event listener for reset button
button.addEventListener('click', () => {
  container.innerHTML = '';
  let newGridSize = prompt('Please enter the grid size you want (must be under 100):');
  console.log(newGridSize)
  if (newGridSize > 100) {
    alert(`${newGridSize} is over 100. Try again!`)
    createNewGrid(16);
  } else if (newGridSize === '') {
    alert('Please enter a valid number between 1 and 100');
    createNewGrid(16);
  } else {
    createNewGrid(newGridSize);
  }
})




// loads default 16x16 grid
window.addEventListener('load', createNewGrid(16));