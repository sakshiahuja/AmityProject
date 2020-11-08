import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service'
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nam: any;

  ngOnInit() {

  }     
// postdata(users){
//   const body = {
//     Name: users.Name,
//     Email: users.Email,
//     Message: users.Message
//     }
//     console.log(body)
//     this.xx.getdata(body).subscribe(res=>{
//       console.log(res);   
//     })
// }
  constructor(private xx:ContactserviceService) { }
  xyz:any =[];
 Name:string;
 Email:string;
 Message:string;

//   emailFormControl = new FormControl('', [
//    Validators.required,
//    Validators.email,
//  ]);
//  nameFormControl = new FormControl('', [
//    Validators.required
//  ]);
//  messageFormControl = new FormControl('', [
//    Validators.required
//  ]);
  
AdminUserCreateForm = new FormGroup({
  Name: new FormControl('',[
  Validators.required
]),
Email: new FormControl('',[
  Validators.email,
  Validators.required
]),
Message: new FormControl('',[
 
  Validators.required
])
})
 submittoDB(){
        var user1 = {'name':this.AdminUserCreateForm.value.Name,'email':this.AdminUserCreateForm.value.Email,'message':this.AdminUserCreateForm.value.Message};
        this.xx.postdata(user1).subscribe(res=>{

        //this.postdata(user1)
        // this.AdminUserCreateForm.value.Name.setValue('');
        // this.AdminUserCreateForm.value.Email.setValue('');
        // this.AdminUserCreateForm.value.Message.setValue('');
})
 }}
