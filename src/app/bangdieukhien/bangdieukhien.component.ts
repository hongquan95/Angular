import { Component, OnInit } from '@angular/core';
import {YC, HD, LK} from './listclass';
import {YEUCAU,HOPDONG, LIENKET} from './list';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-bangdieukhien',
  templateUrl: './bangdieukhien.component.html',
  styleUrls: ['./bangdieukhien.component.css']
})
export class BangdieukhienComponent implements OnInit {

 YeuCau = YEUCAU;
 HopDong = HOPDONG;
 LienKet = LIENKET;
  
  constructor() { }

  ngOnInit() {
  }

}
