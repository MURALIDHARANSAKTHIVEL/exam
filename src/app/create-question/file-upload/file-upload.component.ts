import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  img = null;
  optionValue = new FormControl();
  optionType = new FormControl();
  ansType;
  ansTemplate;
  optionError;
  imagehidden = true;
  disableTemplateDiv;
  constructor(private Imagevar: DomSanitizer) { }

  ngOnInit() {

    this.disableTemplateDiv = 'disable';
  }


  questImage(Imageevent) {
    const imgfile = Imageevent.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imgfile)
    reader.onload = (event) => {
      this.img = reader.result
this.imagehidden=false;
this.disableTemplateDiv = 'removedisable';
    }

  }
  optionCount(event) {
   

    this.ansTemplate = this.optionType.value

    if(this.ansTemplate!=null && this.optionValue.value < 6)
    {

      this.optionError = "";
    var numbers;
    numbers = new Array(this.optionValue.value).fill(1).map((_, i) => String.fromCharCode(65 + i));
    this.ansType = numbers;


   
  }
  this.optionError = "Give maximum as  5 option";
  }



  Display(url) {
    return this.Imagevar.bypassSecurityTrustUrl(url);
  }

}
