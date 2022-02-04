const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game()
    expect(Game).to.be.a('function');
  });

  it('should instantiate a class', function() {
    const game = new Game()
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game()
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

});
