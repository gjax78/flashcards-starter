const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.currentCard = this.deck[0]
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turns++
    return turn.feedback()
  }

  calculatePercentCorrect() {
    const correctGuesses = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    return correctGuesses
  }

  endRound() {
    return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
