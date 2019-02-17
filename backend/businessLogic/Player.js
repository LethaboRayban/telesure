"use strict";

let _c = require("./Card");

const PLAYER_STATES = {
  WIN: "Wins",
  LOSE: "Loses",
  DRAW: "Draw",
  BUST: "Bust",
  WAITING_TO_PLAY: "Waiting to play"
};

// const PlayerName = '';
// const score = 0;

class Player {
  constructor(object) {
    this.name = object.name;
    this.cards = object.cards;
    this.score = object.score || 0;
    this.staus = object.status || PLAYER_STATES.WAITING_TO_PLAY;
  }

  /**
   * @returns {Array} cards
   */
  getCards() {
    return this.cards;
  }

  /**
   * @returns {string} currentState
   */
  getCurrentState() {
    return this.currentState;
  }

  /**
   * @returns {string} name
   */
  getName() {
    return this.name;
  }
}

module.exports = {
  Player
};
