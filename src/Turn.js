class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      return true
    } else {
      return false
    }
  }

  feedback() {
    if (this.card.correctAnswer === this.guess) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
