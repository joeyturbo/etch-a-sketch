
defaultGridSize = 256;
const container = document.querySelector('.container')

for (i = 1; i <= defaultGridSize; i++) {
  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.setAttribute('id',`square-${i}`);
  container.appendChild(square);
}

const gridSquare = document.querySelectorAll('.square');

gridSquare.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  })
})