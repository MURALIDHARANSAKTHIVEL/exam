import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from 'src/app/AppService/userservice.service';

@Component({
  selector: 'app-makeuser',
  templateUrl: './makeuser.component.html',
  styleUrls: ['./makeuser.component.scss']
})
export class MakeuserComponent implements OnInit {

  constructor(private service : UserserviceService) { }
  info=[];
  info1=[];
  inf=[];
access :any= (this.service.userDetail.permission).split(',');
userpermisson;
  ngOnInit() {
   
  }
  Makeuser= new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    EmployeeId:new FormControl(),
    password:new FormControl(),
    Email:new FormControl(),
    mobilenumber:new FormControl(),
    role: new FormControl(),
    access: new FormControl() ,
    gender: new FormControl()
  });
  permission(value)
  {

console.log(value.target.checked);
if(value.target.checked==true)
{

this.info.push(value.target.value);
//this.info1 = this.info;
}
else
{
  delete this.info[this.info.indexOf(value.target.value)];
  this.info=this.info.filter(x=>x!=null);
  console.log(this.info);
  // let filtered = this.info.filter(function (el) {
  //   return el != null;
  // });
  // this.info=filtered;
}
console.log(this.info.toString());
this.inf=(this.info.toString()).split(',');
console.log(this.inf);
this.Makeuser.controls['access'].setValue(this.inf.toString())

}
 

}
