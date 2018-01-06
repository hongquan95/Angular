import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  a;
  test;
  top: any;
  constructor() { }

  ngOnInit() {
    this.a = false;
  }

  /* Set the width of the side navigation to 250px */
  status() {

    this.a = !this.a;
    if (this.a) { // Dao trang thai khi nhat button

      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("body-register").classList.add("animation");
      document.getElementById("menu").classList.add("animation-top");
      document.getElementById("scrollMenu").style.top = "0";
      console.log(this.a);
      
      // document.getElementById("body-register").style.marginLeft = "200px";

      // document.getElementById()
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("body-register").classList.remove("animation");
      document.getElementById("menu").classList.remove("animation-top");
      // document.getElementById("body-register").style.marginLeft = "0";
    }

  }
  scroll()
  {
    if ( (document.getElementById("body").scrollTop > 40)||(document.documentElement.scrollTop > 40))
    {
      document.getElementById("scrollMenu").style.top = "0";
    }
  }
  

}


    
    
  



