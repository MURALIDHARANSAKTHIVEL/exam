import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../AppService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private service: UserserviceService) { }

  ngOnInit() {
  }
  loginForm=new FormGroup({
username:new FormControl(),
password: new FormControl()
  });


  loginAction()
  {
this.service.OwnerInformation(this.loginForm.value).subscribe(data=>{
  this.service.userDetail=data;

  console.log(data);
  this.route.navigate(['login/aside']);
})

  }
}
