const playerOneSymbole = 'X'
const playerTwoSymbole = 'O'
let tableSize = 3;
const winningCombinations = createWinningCombinations(tableSize);

createTicTacToeTable(tableSize);

let cells = document.querySelectorAll('#tictactoe-table .cell');
let gameActive = true;
let currentPlayer = playerOneSymbole;

document.querySelector('.resetbutton').addEventListener('click', resetGame);
cells.forEach((i_cell) => {
  i_cell.addEventListener('click', cellClicked);
});
