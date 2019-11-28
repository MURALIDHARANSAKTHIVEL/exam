import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/AppService/userservice.service';
import { GlobalData, UserAccess } from 'src/app/AppService/GlobalData';

@Component({
  selector: 'app-makeuser',
  templateUrl: './makeuser.component.html',
  styleUrls: ['./makeuser.component.scss']
})
export class MakeuserComponent implements OnInit {

  constructor(private service: UserserviceService, private gobaldata: GlobalData) { }
  formError=true;
  userCreate = true;
  accessallow: UserAccess[] = [];
  gper = [
    {
      "pid": 1,
      "permissonkey": 1,
      "accessname": "makeadmin",
      "roleaccesskey": 1
    },
    {
      "pid": 2,
      "permissonkey": 2,
      "accessname": "ManageAdmin",
      "roleaccesskey": 1
    },
    {
      "pid": 3,
      "permissonkey": 3,
      "accessname": "MakeTestconductor",
      "roleaccesskey": 1
    },
    {
      "pid": 4,
      "permissonkey": 4,
      "accessname": "ManageTestconductor",
      "roleaccesskey": 1
    },
    {
      "pid": 5,
      "permissonkey": 5,
      "accessname": "CreateQuestion",
      "roleaccesskey": 1
    },
    {
      "pid": 6,
      "permissonkey": 6,
      "accessname": "TestReport",
      "roleaccesskey": 1
    },
    {
      "pid": 8,
      "permissonkey": 3,
      "accessname": "MakeTestconductor",
      "roleaccesskey": 2
    },
    {
      "pid": 9,
      "permissonkey": 4,
      "accessname": "ManageTestconductor",
      "roleaccesskey": 2
    },
    {
      "pid": 10,
      "permissonkey": 5,
      "accessname": "CreateQuestion",
      "roleaccesskey": 2
    },
    {
      "pid": 11,
      "permissonkey": 6,
      "accessname": "TestReport",
      "roleaccesskey": 2
    },
    {
      "pid": 12,
      "permissonkey": 5,
      "accessname": "CreateQuestion",
      "roleaccesskey": 3
    },
    {
      "pid": 13,
      "permissonkey": 6,
      "accessname": "TestReport",
      "roleaccesskey": 3
    }
  ];

  // userpermission = this.gobaldata.GlobalOwnerdetails.permission.split(',');
  userpermission=this.service.userDetail.permission.split(',');
  acesspermisson = this.gobaldata.PermissionMap;
  ngOnInit() {
    this.roleFilter(2);


  }
  Makeuser = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    EmployeeId: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    Email: new FormControl(null, [Validators.required]),
    mobilenumber: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    access: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    displaypicture: new FormControl(null),
    createdby: new FormControl(null),
  });





  roleFilter(rolevalue) {
    if (rolevalue == 2) {

      this.userCreate = (this.userpermission.includes("1")) ? false : true;

    }
    else {

      this.userCreate = (this.userpermission.includes("3")) ? false : true;

    }

    this.accessallow = [];
    this.userpermission.forEach(element => {
      //  let accesscheck = this.service.Allpermissions.filter(x => x.roleaccesskey == rolevalue).map(x => x.permissonkey).includes(Number(element))
      let accesscheck = this.gper.filter(x => x.roleaccesskey == rolevalue).map(x => x.permissonkey).includes(Number(element))
      let accessObject = new UserAccess();
      accessObject['accesskey'] = element;
      accessObject['accessname'] = this.acesspermisson[element];
      if (accesscheck) {
        accessObject['checked'] = true;
        accessObject['disabled'] = true;
      }

      this.accessallow.push(accessObject);
    });



  }

  createUser(roleValue) {


    if (this.Makeuser.valid == true) {
      this.formError=true;
this.service.createUser(this.Makeuser.value).subscribe(
 data=> {

console.log(data);
  }
)


    }

    else
    {
this.formError=false;

    }

    this.Makeuser.controls['createdby'].setValue(this.service.userDetail.userkey);
    this.Makeuser.controls['role'].setValue(roleValue);
    this.Makeuser.controls['access'].setValue(this.accessallow.filter(x => x.checked == true).map(x => x.accesskey).toString());

  }
  customAccess(accessData) {

    accessData.checked = !accessData.checked;
  }















  // permission(value) {

  //   if (value.target.checked == true) {

  //     this.info.push(value.target.value);

  //   }
  //   else {
  //     delete this.info[this.info.indexOf(value.target.value)];
  //     this.info = this.info.filter(x => x != null);


  //   }
  //   console.log(this.info.toString());
  //   this.inf = (this.info.toString()).split(',');
  //   console.log(this.inf);
  //   this.Makeuser.controls['access'].setValue(this.inf.toString())

  // }
}
