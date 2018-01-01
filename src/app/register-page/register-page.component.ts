import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
// @Component({
//   selector:'ngfor-example',
//   template:'',

// })
// class NgForExampleComponent{
  
// }
export class RegisterPageComponent implements OnInit {

  test;
  test2:boolean;
  constructor() { }

  ngOnInit() { 
    this.test2 = true;
    
    
  
  }
  check()
  {
      this.test = document.getElementById("radioStacked1")
      this.test2 = this.test.checked;
      
        
     
  }
            
    
  }
  
  
  

