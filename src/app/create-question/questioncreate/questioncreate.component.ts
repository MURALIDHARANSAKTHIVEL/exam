import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-questioncreate',
  templateUrl: './questioncreate.component.html',
  styleUrls: ['./questioncreate.component.scss']
})
export class QuestioncreateComponent implements OnInit {

  constructor() { }
  question = new FormControl();
  optionType = new FormControl();
  optionValue = new FormControl();
  ansType;
  ansTemplate;
  optionError;
  ngOnInit() {
  }

  optionCount(event)
  {
    this.ansTemplate=this.optionType.value;

    this.ansTemplate = this.optionType.value

    if(this.ansTemplate!=null && this.optionValue.value < 6)
    {
      this.optionError='';
      var numbers;
      numbers = Array(this.optionValue.value).fill(1).map((x,i)=>i);
  this.ansType=numbers;


   
  }
  else{

    this.optionError = "Give maximum as  5 option";
  }
  

   
  }


}
