"use strict";

class Card {
  constructor(options) {
    this.suit = options.suit;
    this.value = options.value;
    this.visible = options.visible || false;
  }


}

module.exports = {
  Card
};
