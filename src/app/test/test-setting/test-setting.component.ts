import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-setting',
  templateUrl: './test-setting.component.html',
  styleUrls: ['./test-setting.component.scss']
})
export class TestSettingComponent implements OnInit {
model;
time;
date;
date1:Data = new Date();
setting={
bigBanner:true,
timePicker:true,
format:'dd-MM-yyyy hh:mm a',
defalutOpen:false,
closeOnSelect:false

};
testtime;
  constructor(config:NgbTimepickerConfig) { 
    config.size="small";
    config.spinners=false,
    config.seconds=true
    config.meridian=true;
  }

  ngOnInit() {
  }

qpaper=["Babu lifecyle Test","Babu Test","Babu lifecyle Test-part1","Babu lifecyle Test-part2"]
convert(){
this.date=this.model.year+"/"+this.model.month+"/"+this.model.day;

this.testtime=this.time.hour+":"+this.time.minute;
}
toggle(datetime)
{
  datetime["popover"]= !datetime["popover"];
  datetime["outsideClick"]="true";
  console.log(this.date1.value);
 
}
}
