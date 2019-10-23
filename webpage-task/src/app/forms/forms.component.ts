import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
// export class FormFieldErrorExample {
  
// }
export class FormsComponent implements OnInit {
  foods = ["Bread, Cereal, Rice, and Pasta","Vegetables","Fruit"," Milk, Yogurt, and Cheese","Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts"," Fats, Oils, and Sweets"]
  name="";
  errorMessage = "Must be at least 8 characters";
  email = new FormControl('', [Validators.required, Validators.email]);
  isValid = true;
  constructor() { }

  ngOnInit() {
  }
  check(){
    if(this.name == "" || this.name.length < 8){
      this.isValid = false
    }
  }

}
