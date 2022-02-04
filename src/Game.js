const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(flashcard => {
      return new Card(flashcard.id, flashcard.question, flashcard.answers, flashcard.correctAnswer)
    })
    const deck = new Deck(cards)
    const round = new Round(deck)
    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;
