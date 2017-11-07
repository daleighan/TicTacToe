const prompt = require('prompt');

class Board {
  constructor() {
    this.board = new Array(3);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(3).fill(' ');
    }
    console.log(this);
  }
}

class Game {
  constructor() {
    this.board = new Board;
    prompt.start();
    this.won = false;
  }

  showBoard() {
    console.log(this.board.board[0]);
    console.log(this.board.board[1]);
    console.log(this.board.board[2]);
  }
  isWon() {
    // a function to check if the game is won
  }
  setPlace(i, j, piece) {
    this.board.board[i][j] = piece;
  }
}

let game = new Game;
game.setPlace(1, 1, 'x');

prompt.start();
prompt.get(['Who will be player 1?', 'Who will be player 2?'], (err, result) => {
  game.player1 = result['Who will be player 1?'];
  game.player2 = result['Who will be player 2?'];
  while(game.won === false) {
    
    if(game.isWon()){

    }
  }
});
