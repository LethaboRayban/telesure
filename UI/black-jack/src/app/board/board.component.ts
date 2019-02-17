import { Component, OnInit } from '@angular/core';
import { DeckService } from '../shared-modules/deck.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public isGameStart = false;
  public isStand = false;
  public isStandButtonClicked = false;

  private _cards;
  public players: {
    id: number;
    name: string;
    score: number;
    status: string;
    cards: any;
  }[] = [
    { id: 0, name: 'Justin', score: 0, status: 'waiting to start', cards: [] },
    { id: 1, name: 'Rowan', score: 0, status: 'waiting to start', cards: [] },
    { id: 2, name: 'Anthony', score: 0, status: 'waiting to start', cards: [] }
  ];
  constructor(private _deck: DeckService) {}

  ngOnInit() {}

  public play() {
    console.log('playing');
    this.isGameStart = true;

    const c = this._deck.getDeck().subscribe(deck => {
      // deal first card to each player
      for (let i = 0; i < 3; i++) {
        this.players[i].cards.push(this.deal(deck));
        this.players[i].status = 'waiting to stand';
      }

      // deal second card to each player
      for (let j = 0; j < 3; j++) {
        this.players[j].cards.push(this.deal(deck));
        this.players[j].status = 'waiting to stand';
      }
    });
  }

  standAll() {
    // flip all cards
    this._setallCardsToVisible();
    this._calculateScore();
    this._updateStatus();

    this.isStand = true;
    this.isStandButtonClicked = true;
  }

  private _setallCardsToVisible() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        this.players[i].cards[j].visible = true;
      }
    }

    console.log(this.players);
  }

  private _calculateScore() {
    for (let i = 0; i < 3; i++) {
      let tempScore = 0;
      tempScore =
        this._getCardValue(this.players[i].cards[0].value) +
        this._getCardValue(this.players[i].cards[1].value);

      this.players[i].score = tempScore;
    }
  }

  private _updateStatus() {
    const scoreArray = [];

    for (let i = 0; i < 3; i++) {
      scoreArray.push(this.players[i].score);
    }

    let max = scoreArray[0];
    let maxIndex = 0;

    for (let j = 1; j < scoreArray.length; j++) {
      if (scoreArray[j] > max) {
        maxIndex = j;
        max = scoreArray[j];
      }
    }

    if (maxIndex === 0) {
      if (scoreArray[0] === scoreArray[1]) {
        this.players[0].status = 'Tie';
        this.players[1].status = 'Tie';
      } else if (scoreArray[0] === scoreArray[2]) {
        this.players[0].status = 'Tie';
        this.players[2].status = 'Tie';
      } else {
        this.players[0].status = 'Won';
      }
    } else if (maxIndex === 1) {
      if (scoreArray[1] === scoreArray[0]) {
        this.players[1].status = 'Tie';
        this.players[0].status = 'Tie';
      } else if (scoreArray[1] === scoreArray[2]) {
        this.players[1].status = 'Tie';
        this.players[2].status = 'Tie';
      } else {
        this.players[1].status = 'Won';
      }
    } else {
      if (scoreArray[2] === scoreArray[0]) {
        this.players[2].status = 'Tie';
        this.players[0].status = 'Tie';
      } else if (scoreArray[2] === scoreArray[1]) {
        this.players[2].status = 'Tie';
        this.players[1].status = 'Tie';
      } else {
        this.players[2].status = 'Won';
      }
    }

    // if status is still = waiting to stand then lose
    for (let k = 0; k < 3; k++) {
      if (this.players[k].status === 'waiting to stand') {
        this.players[k].status = 'lost';
      }
    }
  }

  // ace always 11 for our test case
  private _getCardValue(value, aceAsEleven = true) {
    switch (value) {
      case 'A':
        return aceAsEleven ? 11 : 1;
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      default:
        return parseInt(value);
    }
  }

  deal(deck) {
    return deck.shift(); // remove card from top of deck
  }
}
