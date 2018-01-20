import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms/';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  // get dichVuArr(
  //   return this.requestForm.get('dichVu') as FormArray
  get dichVuArr(){
    return this.requestForm.get('dichVu') as FormArray;
  }
  requestForm = this.fb.group({
    dichVu: this.fb.array([])
  })

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.dichVuArr.push(this.fb.group({
      tenDichVu: new FormControl()
    }));
  }
  themDichVu()
  {
    this.dichVuArr.push(this.fb.group({
      tenDichVu: new FormControl()
    }));
  }

}
