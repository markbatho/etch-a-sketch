const DEFAULT_SQUARE_COUNT = 16;
const DEFAULT_SQUARE_WIDTH = '8px';

const gridContainer = document.querySelector('.grid-container');
const setGridSizeBtn = document.querySelector('#settings');

setGridSizeBtn.addEventListener('click', () => {
  let gridSize = +prompt('Enter the desired size of the grid: (MAX: 100)');

  if (gridSize > 100) return;
  if (gridSize === 0) gridSize = DEFAULT_SQUARE_COUNT;

  destroyGrid(gridContainer);
  generateSquareGrid(gridSize, DEFAULT_SQUARE_WIDTH, gridContainer);
});

function generateSquareGrid(count, width, container) {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = width;
      square.style.height = width;
      square.addEventListener('mouseover', function () {
        this.classList.add('hovered-square');
      });

      container.style.gridTemplateColumns = `repeat(${count}, auto)`;
      container.style.gridTemplateRows = `repeat(${count}, auto)`;
      container.appendChild(square);
    }
  }
}

function destroyGrid(container) {
  container.replaceChildren();
  container.style.gridTemplateColumns = '0px';
  container.style.gridTemplateRows = '0px';
}

generateSquareGrid(DEFAULT_SQUARE_COUNT, DEFAULT_SQUARE_WIDTH, gridContainer);
