import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() Card: any;
  @Input() isStand: boolean;

  constructor() {}
  ngOnInit() {}

  getSVGPath() {
    if (!this.isStand) {
      return '../../assets/cards/RED_BACK.svg';
    }
    return (
      '../../assets/cards/' +
      this.Card.value +
      this.Card.suit.toLocaleUpperCase() +
      '.svg'
    );
  }
}
