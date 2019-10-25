import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clicked = true;


  constructor(private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit() {
      
  
   }
   formIsClicked(event){
    this.clicked = event
   }

}
