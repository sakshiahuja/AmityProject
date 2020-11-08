import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router:Router ) {
} 
ngOnInit() {
}
show = true;
loginUser(e){
e.preventDefault();
console.log(e);
 var email=e.target.elements[0].value;
 var password=e.target.elements[1].value;

 if (email == 'heena@abc' && password == 'mille' )  
 this.router.navigate(['loggedin']);
}
}
