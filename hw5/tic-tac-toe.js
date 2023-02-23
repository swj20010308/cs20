const player = { X: 'X', O: 'O' }


function Player(name) {
    this.name = name;

    this.nextPlayer = () => {
        if (this.name == player.X) {
            return player.O;
        } else {
            return player.X;
        }
    };

    this.move = (game, i) => {
        game.board[i] = this.name;
        document.getElementById("index" + i).innerHTML = this.name;
        document.getElementById("prompt").innerHTML =
            "Player " + this.nextPlayer() + "'s turn:";
    };
}

function Game(dim, startPlayer) {
    this.currentPlayer = startPlayer;

    this.board = new Array(dim * dim).fill("Empty");

    this.clean = () => {
        this.board.fill("Empty");
        this.board.forEach((v, i) =>
            document.getElementById("index" + i).innerHTML = "");
        this.currentPlayer = startPlayer;
    };

    this.isEmpty = (i) => this.board[i] == "Empty";

    this.displayCurrentPlayer = () =>
        document.getElementById("prompt").innerHTML =
        "Player " + this.currentPlayer.name + "'s turn:";

    this.checkRow = (i) => {
        let row = Math.floor(i / dim);
        return this.board.slice(row * dim, (row + 1) * dim).reduce((b, v, i) => b && (v == this.currentPlayer.name), true);
    }

    this.checkCol = (i) => {
        let col = i % dim;
        return this.board.filter((v, i) => i % dim == col).reduce((b, v, i) => b && (v == this.currentPlayer.name), true);
    }

    this.checkDiag = (i) => {

        let diag1 = new Array(0);
        let j = i;
        while (j < this.board.length - 1) { j += (dim + 1); }
        if (j == this.board.length - 1) {
            while (j >= 0) {
                diag1.push(this.board[j]);
                j -= (dim + 1);
                console.log(j);
            }
        }

        let diag2 = new Array(0);
        let k = i;
        console.log(k);
        while (k < this.board.length - dim) { k += (dim - 1); console.log(k); }
        if (k == this.board.length - dim) {
            while (k >= dim - 1) {
                diag2.push(this.board[k]);
                k -= (dim - 1);
                console.log(k);
            }
        }

        let checkDiag1 = diag1.reduce((b, v, i) => b && (v == this.currentPlayer.name), true) && diag1.length == dim;
        let checkDiag2 = diag2.reduce((b, v, i) => b && (v == this.currentPlayer.name), true) && diag2.length == dim;
        return checkDiag1 || checkDiag2;
    }

    this.currentPlayerWin = () => {
        return this.board.reduce((b, v, i) => b || this.checkRow(i) || this.checkCol(i) || this.checkDiag(i), false);
    }

    this.printWinner = () => document.getElementById("prompt").innerHTML = "Player " + this.currentPlayer.name + " wins";

    this.tie = () => this.board.reduce((b, v, i) => b && (v != "Empty"), true);

    this.printTie = () => document.getElementById("prompt").innerHTML = "Tie";

}

function ticTackToe(id, game) {
    let index = parseInt(id.charAt(5));

    if (!game.isEmpty(index)) { return; }

    game.currentPlayer.move(game, index);

    const list = document.getElementsByClassName("button");

    if (game.currentPlayerWin()) {
        game.printWinner();
        for (i = 0; i < list.length; i++) {
            list[i].disabled = true;
        }
        setTimeout(() => {
            game.clean();
            game.displayCurrentPlayer();
            for (i = 0; i < list.length; i++) {
                list[i].disabled = false;
            }
        }, 2000);
    } else if (game.tie()) {
        game.printTie();
        for (i = 0; i < list.length; i++) {
            list[i].disabled = true;
        }
        setTimeout(() => {
            game.clean();
            game.displayCurrentPlayer();
            for (i = 0; i < list.length; i++) {
                list[i].disabled = false;
            }
        }, 2000);
    } else {
        game.currentPlayer = new Player(game.currentPlayer.nextPlayer());
    }

}




window.onload = function () {
    ttt.displayCurrentPlayer();
}

var startPlayer = new Player(player.X);
var ttt = new Game(3, startPlayer);








