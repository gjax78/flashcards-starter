const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns++
  }
}

module.exports = Round;
