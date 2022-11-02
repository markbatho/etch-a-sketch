const SQUARE_COUNT = 16;
const SQUARE_WIDTH = '16px';

const gridContainer = document.querySelector('.grid-container');

function generateSquareGrid(count, width, container) {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const square = document.createElement('div');
      square.style.width = width;
      square.style.height = width;
      square.style.backgroundColor = '#ccc';

      container.style.gridTemplateColumns = `repeat(${count}, auto)`;
      container.style.gridTemplateRows = `repeat(${count}, auto)`;
      container.appendChild(square);
    }
  }
}

generateSquareGrid(SQUARE_COUNT, SQUARE_WIDTH, gridContainer);
