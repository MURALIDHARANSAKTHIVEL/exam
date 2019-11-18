import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-make-test',
  templateUrl: './make-test.component.html',
  styleUrls: ['./make-test.component.scss']
})
export class MakeTestComponent implements OnInit {


  constructor( private model : NgbModal) { }

  ngOnInit() {
    this.pagecontrol.setValue(5);
    this.filterByconstraint(1);
  }

maketestQuestion=[{

  template:1,
section:1,
questionType:1,
Question:"	A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?"

},
{

  template:1,
section:1,
questionType:1,
Question:"A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?"

},
{

  template:1,
section:1,
questionType:1,
Question:"	A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?"

},
{

  template:1,
section:1,
questionType:1,
Question:"A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:"

},
{

  template:1,
section:1,
questionType:1,
Question:"A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?"

}
];



countvalue=0;
pagecontrol= new FormControl('');
pageArray;
maketest;
startpage: number;
totalpage: any;
endpage: number;
active: any;
count(value)
{

if(value.target.checked == true)
{
  this.countvalue=this.countvalue+1;
}
else{
  this.countvalue=this.countvalue-1;
}
}

openCreate_Mbox(modelbox)
{
this.model.open(modelbox,{size:"lg"})

}
SetQuestionpaper(successbox,modelbox)
{
  this.model.dismissAll(modelbox);
this.model.open(successbox,{size:"sm"})

}

filterByconstraint(pagevalue)
{
var Question = this.maketestQuestion;
var Questionlength=this.maketestQuestion.length;
var pageItem = this.paginationTable(Questionlength)
this.startpage=(pagevalue-1) * pageItem;
this.endpage= pagevalue * pageItem;
this.totalpage=Questionlength;
this.active=pagevalue;
this.maketest = Question.slice(this.startpage,this.endpage); 

}



paginationTable(Totalcount:number)
{
  console.log(Totalcount);
  var pagecontrolvalue = this.pagecontrol.value;

  if(pagecontrolvalue==null)
  {
    
      pagecontrolvalue=5;
  }
  var pageDivider = (Totalcount % pagecontrolvalue == 0) ? (Math.floor(Totalcount / pagecontrolvalue)) : (Math.floor(Totalcount / pagecontrolvalue) + 1);
  this.pageArray = Array(pageDivider).fill(1).map((e, i) => i + 1);
  return pagecontrolvalue;
}


}
