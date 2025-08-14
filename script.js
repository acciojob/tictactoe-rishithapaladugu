//your JS code here. If required.
  let player1 = "", player2 = "";
    let currentPlayer = "";
    let currentSymbol = "X";
    let gameActive = true;
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    document.getElementById("submit").addEventListener("click", () => {
        player1 = document.getElementById("player-1").value.trim();
        player2 = document.getElementById("player-2").value.trim();

        if (player1 === "" || player2 === "") {
            alert("Please enter both player names.");
            return;
        }

        currentPlayer = player1;
        document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
        document.getElementById("playerInput").style.display = "none";
        document.getElementById("game").style.display = "block";
    });

    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("click", () => {
            if (!gameActive || cell.textContent !== "") return;

            cell.textContent = currentSymbol;

            if (checkWinner()) {
                document.querySelector(".message").textContent = `${currentPlayer}, congratulations you won!`;
                gameActive = false;
                return;
            }

            if (isDraw()) {
                document.querySelector(".message").textContent = "It's a draw!";
                gameActive = false;
                return;
            }

            
            if (currentSymbol === "X") {
                currentSymbol = "O";
                currentPlayer = player2;
            } else {
                currentSymbol = "X";
                currentPlayer = player1;
            }
            document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
        });
    });

    function checkWinner() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return document.getElementById(index.toString()).textContent === currentSymbol;
            });
        });
    }

    function isDraw() {
        return [...document.querySelectorAll(".cell")].every(cell => cell.textContent !== "");
    }