import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {

  constructor(private Modal: NgbModal) { }
 
  pageArray;
  active;
  pagecontrol = new FormControl(1);
startpage;
endpage;
totalpage;
  ngOnInit() {
    this.pagecontrol.setValue(5);

    this.filterByconstraint('', 0, 1);

  }

  searchuser = new FormControl('');
  filterInfo;
  noresult = true;
  searchInfomation;

  UserDetails = [{
    role: 1,
    name: 'murali',
    user: 'admin'
  },
  {
    role: 2,
    name: 'dharan',
    user: 'TestConductor'
  }
    ,
  {
    role: 1,
    name: 'babu',
    user: 'admin'
  }
    ,
  {
    role: 2,
    name: 'surya',
    user: 'TestConductor'
  }
    ,
  {
    role: 1,
    name: 'venkii',
    user: 'admin'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }
    ,
  {
    role: 2,
    name: 'Rakesh',
    user: 'TestConductor'
  }

  ];


filterByconstraint(searchname, rolevalue, pagevalue) {
var filter = this.UserDetails;
var filterdataByrole=this.filterbyrole(rolevalue,filter);

var filterdataByname=this.filterbySearchName(filterdataByrole);

var filterlength = filterdataByname.length;

var pageItem = this.paginationTable(filterlength);

this.startpage=(pagevalue-1) * pageItem;
this.endpage= pagevalue * pageItem;
this.totalpage=filterlength;
this.active=pagevalue;

this.searchInfomation = filterdataByname.slice(this.startpage,this.endpage); 
this.dataNotFound(this.searchInfomation);

  }

filterbyrole(rolevalue,filter)
{
  if (rolevalue != 0) {
    filter = filter.filter(x => x.role == rolevalue);
  }
  console.log(filter);
return filter;
}

filterbySearchName(filterdata)
{
  if(this.searchuser.value==null)
  {

    return filtername;
  }
  var filtername = filterdata.filter(data => data.name.toLowerCase().startsWith(this.searchuser.value));
return filtername;
}

paginationTable(Totalcount:number)
{
  var pagecontrolvalue = this.pagecontrol.value;

  if(pagecontrolvalue==null)
  {
      pagecontrolvalue=5;

  }
  var pageDivider = (Totalcount % pagecontrolvalue == 0) ? (Math.floor(Totalcount / pagecontrolvalue)) : (Math.floor(Totalcount / pagecontrolvalue) + 1);
  this.pageArray = Array(pageDivider).fill(1).map((e, i) => i + 1);
  return pagecontrolvalue;
}



  dataNotFound(value) {

    if (value.length > 0) {

      this.noresult = true;
    }
    else {
      this.noresult = false;
    }
  }


  deleteDetails(Template) {
    this.Modal.open(Template);
  }


}
