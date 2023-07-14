var currentPlayer = 'X';

function handleMove(event) {
  var cell = event.target;

  if (cell.textContent !== '') {
    alert('This cell has already been played!');
    return;
  }

  cell.classList.add(currentPlayer === 'X' ? 'cross' : 'circle');
  cell.textContent = currentPlayer;

  if (checkForWinner()) {
    alert('Player ' + currentPlayer + ' has won the game!');
    resetGame();
  } else if (checkForDraw()) {
    alert('The game is a draw!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkForWinner() {
  var cells = document.querySelectorAll('td');

  // Check rows
  for (var i = 0; i < 3; i++) {
    if (cells[i*3].textContent !== '' &&
        cells[i*3].textContent === cells[i*3+1].textContent &&
        cells[i*3].textContent === cells[i*3+2].textContent) {
      return true;
    }
  }

  // Check columns
  for (var i = 0; i < 3; i++) {
    if (cells[i].textContent !== '' &&
        cells[i].textContent === cells[i+3].textContent &&
        cells[i].textContent === cells[i+6].textContent) {
      return true;
    }
  }

  // Check diagonals
  if (cells[0].textContent !== '' &&
      cells[0].textContent === cells[4].textContent &&
      cells[0].textContent === cells[8].textContent) {
    return true;
  }

  if (cells[2].textContent !== '' &&
      cells[2].textContent === cells[4].textContent &&
      cells[2].textContent === cells[6].textContent) {
    return true;
  }

  return false;
}

function checkForDraw() {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
}

function resetGame() {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
    cells[i].classList.remove('cross', 'circle');
  }
  currentPlayer = 'X';
}

var cells = document.querySelectorAll('td');
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleMove);
     }
