import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../AppService/userservice.service';
import { GlobalData } from '../AppService/GlobalData';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: UserserviceService, private paccess: GlobalData) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  loginAction() {
    this.service.Globalpermission().subscribe(
      data => {
        this.service.Allpermissions = data;
        console.log(this.service.Allpermissions);
        data.forEach(element => {
          this.paccess.globalpermission[element.permissonkey] = element.accessname;
        })
      });

    this.service.OwnerInformation(this.loginForm.value).subscribe(data => {
      this.service.userDetail = data;
      this.route.navigate(['login/aside']);
    })





  }
}
