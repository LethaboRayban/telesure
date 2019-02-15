"use strict";

let _c = require("./Card");
const suits = ["s", "h", "d", "c"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

class Deck {
  constructor() {
    this.cards = [];
    this.refresh();
  }

  refresh() {
    this.init();
    this.shuffle();
  }

  //creating deck
  init() {
    let _th = this;
    _th.cards.length = 0;
    suits.forEach(function(suit) {
      ranks.forEach(function(value) {
        _th.cards.push(new _c.Card({ suit: suit, value: value }));
      });
    });
  }

  shuffle() {
    let currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  deal() {
    return this.cards.shift(); //remove card from top of deck
  }

  getCards() {
    return this.cards;
  }
}

module.exports = {
  Deck
};
