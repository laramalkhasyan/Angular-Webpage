import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../cards.interface';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
  @Input() card: Cards;
  constructor() { }

  ngOnInit() {
  }

}
