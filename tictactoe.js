const prompt = require('prompt');

class Board {
  constructor() {
    this.board = new Array(3);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(3).fill(' ');
    }
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

  checkWin(char) {
    //checks for winning row
    if (this.board.board[0][0] === char && this.board.board[0][1] === char && this.board.board[0][2] === char) {
      this.won = true;
    }
  }

  setPlace(i, j, piece) {
    this.board.board[i][j] = piece;
  }
}

let game = new Game;

prompt.start();

prompt.get(['Who will be player 1?', 'Who will be player 2?'], (err, result) => {
  game.player1 = result['Who will be player 1?'];
  game.player2 = result['Who will be player 2?'];
  console.log(game.player1 + ' moves');
    prompt.get(['x-coordinate', 'y-coordinate'], (err, result) => {
      game.setPlace(result['x-coordinate'], result['y-coordinate'], 'X');
      game.showBoard();
      game.checkWin('X');
      if (game.won) {
        console.log(game.player1 + ' wins');
        process.exit();
      }
      console.log(game.player2 + ' moves');
      prompt.get(['x-coordinate', 'y-coordinate'], (err, result) =>  {
        game.setPlace(result['x-coordinate'], result['y-coordinate'], '0');
        game.showBoard();
        game.checkWin('0');
        if (game.won) {
          console.log(game.player1 + ' wins');
          process.exit();
        }    
        console.log(game.player1 + ' moves');
          prompt.get(['x-coordinate', 'y-coordinate'], (err, result) => {
            game.setPlace(result['x-coordinate'], result['y-coordinate'], 'X');
            game.showBoard();
            game.checkWin('X');
            if (game.won) {
              console.log(game.player1 + ' wins');
              process.exit();
            }
            console.log(game.player2 + ' moves');
            prompt.get(['x-coordinate', 'y-coordinate'], (err, result) =>  {
              game.setPlace(result['x-coordinate'], result['y-coordinate'], '0');
              game.showBoard();
              game.checkWin('0');
              if (game.won) {
                console.log(game.player2 + ' wins');
                process.exit();
              }    
              console.log(game.player1 + ' moves');
                prompt.get(['x-coordinate', 'y-coordinate'], (err, result) => {
                  game.setPlace(result['x-coordinate'], result['y-coordinate'], 'X');
                  game.showBoard();
                  game.checkWin('X');
                  if (game.won) {
                    console.log(game.player1 + ' wins');
                    process.exit();
                  }
                  console.log(game.player2 + ' moves');
                  prompt.get(['x-coordinate', 'y-coordinate'], (err, result) =>  {
                    game.setPlace(result['x-coordinate'], result['y-coordinate'], '0');
                    game.showBoard();
                    game.checkWin('O');
                    if (game.won) {
                      console.log(game.player2 + ' wins');
                      process.exit();
                    }    
                    console.log(game.player1 + ' moves');
                      prompt.get(['x-coordinate', 'y-coordinate'], (err, result) => {
                        game.setPlace(result['x-coordinate'], result['y-coordinate'], 'X');
                        game.showBoard();
                        game.checkWin('X');
                        if (game.won) {
                          console.log(game.player1 + ' wins');
                          process.exit();
                        }
                        console.log(game.player2 + ' moves');
                        prompt.get(['x-coordinate', 'y-coordinate'], (err, result) =>  {
                          game.setPlace(result['x-coordinate'], result['y-coordinate'], '0');
                          game.showBoard();
                          game.checkWin('0');
                          if (game.won) {
                            console.log(game.player2 + ' wins');
                            process.exit();
                          }    
                          console.log(game.player1 + ' moves');
                          prompt.get(['x-coordinate', 'y-coordinate'], (err, result) =>  {
                            game.setPlace(result['x-coordinate'], result['y-coordinate'], '0');
                            game.showBoard();
                            game.checkWin('X');
                            if (game.won) {
                              console.log(game.player1 + ' wins');
                              process.exit();
                            } else {
                              console.log('This game has no winner');
                            }
                          });
                      });    
                    });      
                });    
              });      
          });    
        });      
    });    
  });      
});        
           
           
