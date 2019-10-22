import { Component, OnInit } from '@angular/core';
import {Cards} from '../cards.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cards: Cards [] = [{
    icon: "person",
    title:"7459",
    content:"New projects",
    color:"#e53a36"
  },
  {
    icon: "shopping_basket",
    title:"$7783",
    content:"Total Sales",
    color:"#4ca74f"
  },{
    icon: "stars",
    title:"569",
    content:"Open Tickets",
    color:"#fea11d"
  },
  {
    icon: "person_add",
    title:"5785",
    content:"New Visitors",
    color:"#11b2c6"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
