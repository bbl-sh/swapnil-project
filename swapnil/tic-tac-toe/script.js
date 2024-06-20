let currentPlayer = "X";
let gameBoard = [
    "", "", "",
    "", "", "",
    "", "", ""
];

document.addEventListener("DOMContentLoaded", function() {
    let cells = document.querySelectorAll(".cell");
    let resultElement = document.querySelector(".result");
    cells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            let cellId = cell.id;
            let row = Math.floor((cellId.replace("cell-", "") - 1) / 3);
            let col = (cellId.replace("cell-", "") - 1) % 3;
            if (gameBoard[row * 3 + col] === "") {
                gameBoard[row * 3 + col] = currentPlayer;
                cell.textContent = currentPlayer;
                checkWin(resultElement);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});

function checkWin(resultElement) {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]] && gameBoard[combination[0]] !== "") {
            resultElement.innerHTML = "Player " + gameBoard[combination[0]] + " wins!";
            return;
        }
    }
    if (!gameBoard.includes("")) {
        resultElement.innerHTML = "It's a draw!";
    }
}