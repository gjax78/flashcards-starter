const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.currentCard = this.deck.cards
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    turn.evaluateGuess()
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turns++
    return turn.feedback()
  }
}

module.exports = Round;
