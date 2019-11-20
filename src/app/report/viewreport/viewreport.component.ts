import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.scss']
})
export class ViewreportComponent implements OnInit {

  constructor() { }
  Customreport=true;
  ngOnInit() {
  }
@ViewChild('tabledata',{static:false}) tabledata:ElementRef;

  Customreportdisable()
  {
    this.Customreport =!this.Customreport;
  }

  download()
  {
let document=new jsPDF();
let Handler={
  '#editor':function(element,rendered)
  {
    return true;
  }
};
console.log(this.tabledata.nativeElement);
let tabledata=this.tabledata.nativeElement;
document.fromHTML(tabledata.innerHTML,10,10,{

'width':500,
'elementHandlers':Handler

});
document.save('fresher_2019.pdf');
  }
  
}
