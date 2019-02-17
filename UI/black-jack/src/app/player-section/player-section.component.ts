import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-section',
  templateUrl: './player-section.component.html',
  styleUrls: ['./player-section.component.css']
})
export class PlayerSectionComponent implements OnInit {
  @Input() player1: any;

  @Input() player2: any;

  @Input() player3: any;

  @Input() isStand: boolean;

  constructor() {
    console.log('playersection');
    this.isStand = false;
    // console.log(this.player1.cards);
  }

  ngOnInit() {}
}
