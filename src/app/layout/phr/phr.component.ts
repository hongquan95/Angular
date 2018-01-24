import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';  //CAN THAN IMPORT TU DONG BI SAI

@Component({
  selector: 'app-phr',
  templateUrl: './phr.component.html',
  styleUrls: ['./phr.component.css']
})
export class PhrComponent implements OnInit {
  
  register = "";
  phrForm = new FormGroup(
    {
      userName: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl()

    });
// 
  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.phrForm.value);
  }

}
