import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalData {

  globalpermission: any = {};

  PermissionMap={1: "makeadmin", 2: "ManageAdmin", 3: "MakeTestconductor", 4: "ManageTestconductor", 5: "CreateQuestion", 6: "TestReport"};
  GlobalOwnerdetails: OwnerDetails = {
    userkey: 3,
    firstname: "Ramesh",
    lastname: "Babu",
    employee_Id: "NSIN452",
    email: "rbaskaran@nextsphere",
    mobilenumber: "8344433864",
    rolekey: 1,
    permission: "1,2,3,4,5,6",
    genderkey: 1,
    displaypicture: null,
    createdby: 1,
    password: "123456"
  };

}

export class UserAccess
{
  accesskey:string="";
  accessname:string="";
  checked:Boolean=false;
  disabled:Boolean=false;

}