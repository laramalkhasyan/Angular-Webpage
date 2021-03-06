import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import{Options} from '../options.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {
  
  @Output() clicked = new EventEmitter<boolean>();
  options: Options[] = [{
    text: "Dashboard",
    icon:"desktop_mac",
    side:""
  },
  {
    text: "Forms",
    icon:"track_changes",
    side:""
  },
  {
    text: "UI Features",
    icon:"dashboard",
    side:"keyboard_arrow_down"
  },
  {
    text: "Tables",
    icon:"grid_on",
    side:""
  },
  {
    text: "Charts",
    icon:"pie_chart_outlined",
    side:""
  },
  {
    text: "Sample Pages",
    icon:"pages",
    side:"keyboard_arrow_down"
  },
]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  isClicked(item){
    if(item.text=="Forms"){
      this.clicked.emit(false);
      this.router.navigateByUrl('/forms');
      
    }else if(item.text=="Dashboard"){
      this.clicked.emit(true);
    }}
}
