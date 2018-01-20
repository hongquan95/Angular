import { Component, OnInit } from '@angular/core';
import { login } from '../login';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  login: login = new login();
  constructor() { }

  ngOnInit() {
  }

}
