import { Component, OnInit } from '@angular/core';
import {YC, HD} from './listclass';
import {YEUCAU,HOPDONG} from './list';

@Component({
  selector: 'app-bangdieukhien',
  templateUrl: './bangdieukhien.component.html',
  styleUrls: ['./bangdieukhien.component.css']
})
export class BangdieukhienComponent implements OnInit {

 YeuCau = YEUCAU;
 HopDong = HOPDONG;
  
  constructor() { }

  ngOnInit() {
  }

}
