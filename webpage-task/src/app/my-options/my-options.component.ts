import { Component, OnInit, Input } from '@angular/core';
import{Options} from '../options.interface'

@Component({
  selector: 'app-my-options',
  templateUrl: './my-options.component.html',
  styleUrls: ['./my-options.component.css']
})
export class MyOptionsComponent implements OnInit {
  @Input() option: Options;
  constructor() { }

  ngOnInit() {
  }

}
