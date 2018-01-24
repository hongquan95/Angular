import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms/';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
// export class checkValue{
//   valueDichVu: string;
// }
export class RequestComponent implements OnInit {
  // get dichVuArr(
  //   return this.requestForm.get('dichVu') as FormArray
  get dichVuArr(){
    return this.requestForm.get('dichVu') as FormArray;
  }
  get fieldArr(){
    return this.requestForm.get('field') as FormArray;
  }


  requestForm = this.fb.group({
  dichVu: this.fb.array([]),
  field: this.fb.array([]),
  baoHiem: new FormControl,
  ngayKham: new FormControl,
  noiKham: new FormControl,
  
  })
  // submitForm = new FormGroup(
  //   {
  //     soLuong: new FormControl()
  //   }
  // )
  constructor( public fb:FormBuilder) { }


  // valueDichVu: checkValue = new checkValue();
  ngOnInit() {
    // this.valueDichVu.valueDichVu = null;
    this.themDichVu();
    
  }

  themDichVu()
  {
    this.dichVuArr.push(this.fb.group({
      tenDichVu: new FormControl(),
      soLuong: new FormControl(),
      themOption: new FormControl(),
      
    }));
  }

  addField()
  {
    this.fieldArr.push(this.fb.group({
      tenField: new FormControl()
    }));
  }
  showSubmitForm()
  {
    console.log(this.requestForm.value);
  }
  xoaDichVu(index,obj)
  {
    // debugger;
    
    // var a = obj.get('tenDichVu').value;
    // var b = obj.get('themOption').value;
    // var c = obj.get('soLuong').value;
    // var d = this.requestForm.value.dichVu;
    
    // var e = d.findIndex(x=>(x.soLuong == c && x.tenDichVu == a && x.themOption == b));
    // return this.dichVuArr.value.dichVu.splice(obj,obj+1);

    // console.log(obj[index].value);
    this.dichVuArr.value.splice(index,1);
    obj.splice(index,1);

    // return this.dichVuArr.value.splice(obj,1)


    // console.log(obj);
    
    // this.ng-reflect-name;
    
   
  }

}
