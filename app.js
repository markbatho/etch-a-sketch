const DEFAULT_GRID_SIZE = 512;
const DEFAULT_SQUARE_COUNT = 16;
const BORDER = false;
// const DEFAULT_SQUARE_WIDTH = '16px';

const gridContainer = document.querySelector('.grid-container');
const setGridSizeBtn = document.querySelector('#settings');

setGridSizeBtn.addEventListener('click', () => {
  let gridSize = +prompt('Enter the desired size of the grid: (MAX: 64)');

  if (gridSize > 64) return;
  if (gridSize === 0) gridSize = DEFAULT_SQUARE_COUNT;

  destroyGrid(gridContainer);
  generateSquareGrid(gridSize, gridContainer, BORDER);
});

function generateSquareGrid(count, container, border) {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${DEFAULT_GRID_SIZE / count}px`;
      square.style.height = `${DEFAULT_GRID_SIZE / count}px`;
      
      if (BORDER) {
        square.style.borderBottom = '1px solid #001253';
        square.style.borderRight = '1px solid #001253';
      
        if (i === count - 1) {
          square.style.borderLeft = '0';
          square.style.borderBottom = '0';
        }

        if (j === count - 1) {
          square.style.borderRight = '0';
        }
      }

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

generateSquareGrid(DEFAULT_SQUARE_COUNT, gridContainer, BORDER);
