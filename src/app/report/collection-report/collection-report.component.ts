import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-collection-report',
  templateUrl: './collection-report.component.html',
  styleUrls: ['./collection-report.component.scss']
})
export class CollectionReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('tabledata', { static: false }) tabledata: ElementRef;

  download() {
    let document = new jsPDF();
    let Handler = {
      '#editor': function (element, rendered) {
        return true;
      }
    };
    console.log(this.tabledata.nativeElement);
    let tabledata = this.tabledata.nativeElement;
    document.fromHTML(tabledata.innerHTML, 10, 10, {


      'elementHandlers': Handler

    });
    document.save('fresher_2019.pdf');
  }


}
