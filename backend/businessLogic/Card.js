"use strict";

class Card {
  constructor(options) {
    this.suit = options.suit;
    this.value = options.value;
    this.visible = options.visible || false;
  }

  getCardValue(aceAsEleven = false) {
    switch (this.value) {
      case "A":
        return aceAsEleven ? 11 : 1;
      case "J":
      case "Q":
      case "K":
        return 10;
      default:
        return parseInt(this.value);
    }
  }

  getSuitIcon() {
    switch (this.suit) {
      case "s":
        return "&spades;";
      case "h":
        return "&hearts;";
      case "d":
        return "&diams;";
      case "c":
        return "&clubs;";
      default:
        return "";
    }
  }

  getValue() {
    return this.value;
  }

  //   isVisible() {
  //     return this.visible;
  //   }

  //   setVisible(value) {
  //     this.visible = value;
  //   }

  toString() {
    if (this.visible) {
      return this.valueString() + this.suitString();
    } else {
      return "?";
    }
  }
}

module.exports = {
  Card
};
