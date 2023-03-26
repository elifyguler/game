const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleSquareClick(e) {
  const square = e.target;
  const squareId = square.id;

  if (square.textContent !== '') {
    return;
  }

  square.textContent = currentPlayer;

  if (checkForWin()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
    return;
  }

  if (checkForTie()) {
    alert('Tie game!');
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return squares[a].textContent !== '' && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent;
  });
}

function checkForTie() {
  return [...squares].every(square => square.textContent !== '');
}

function resetGame() {
  [...squares].forEach(square => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}

squares.forEach(square => {
  square.addEventListener('click', handleSquareClick);
});
