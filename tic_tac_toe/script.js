document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const resetButton = document.querySelector(".reset-btn");
    const playerTurn = document.getElementById("player");
    const winner = document.querySelector('.winner');

    let board = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;
    let currentPlayer = 'X';

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            handlePlayerMove(box);
        });
    });

    function handlePlayerMove(box) {
        const index = Array.from(boxes).indexOf(box);
        if (!gameOver && board[index] === '') {
            box.textContent = currentPlayer;
            board[index] = currentPlayer;
            checkWinner();
            switchPlayer();
        }
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerTurn.textContent = `${currentPlayer} Turn`;
    }

    resetButton.addEventListener('click', resetGame);

    function resetGame() {
        board.fill('');
        gameOver = false;
        currentPlayer = 'X';
        playerTurn.textContent = `${currentPlayer} Turn`;
        winner.textContent = '';
        boxes.forEach(box => {
            box.textContent = '';
            box.classList.remove('winning-box');
        });
    }

    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                winner.textContent = `${currentPlayer} wins!`;
                boxes[a].classList.add('winning-box');
                boxes[b].classList.add('winning-box');
                boxes[c].classList.add('winning-box');
                const wb=document.querySelectorAll(".winning-box");
                break;
            }
        }
        if (!board.includes('') && !gameOver) {
            gameOver = true;
            winner.textContent = "It's a Draw";
        }
    }
});
