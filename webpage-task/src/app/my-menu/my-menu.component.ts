import { Component, OnInit } from '@angular/core';
import{Options} from '../options.interface';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {
  options: Options[] = [{
    text: "Dashboard",
    icon:"https://img.icons8.com/pastel-glyph/64/000000/monitor.png",
    side:""
  },
  {
    text: "Forms",
    icon:"https://img.icons8.com/wired/64/000000/circled.png",
    side:""
  },
  {
    text: "UI Features",
    icon:"https://img.icons8.com/ios-filled/50/000000/closed-window.png",
    side:"https://img.icons8.com/metro/26/000000/expand-arrow.png"
  },
  {
    text: "Tables",
    icon:"https://img.icons8.com/ios-glyphs/30/000000/grid.png",
    side:""
  },
  {
    text: "Charts",
    icon:"https://img.icons8.com/windows/32/000000/75-percents.png",
    side:""
  },
  {
    text: "Sample Pages",
    icon:"https://img.icons8.com/ios-glyphs/30/000000/square-brackets.png",
    side:"https://img.icons8.com/metro/26/000000/expand-arrow.png"
  },
]
  constructor() { }

  ngOnInit() {
  }

}
