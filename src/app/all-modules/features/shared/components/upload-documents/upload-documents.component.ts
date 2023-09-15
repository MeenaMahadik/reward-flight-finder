import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent {
  documents:any=[
    {label:'Id Card', isHaveNumber:true, isNumberRequired:false, isHaveFront:true, isHaveBack:false},
    {label:'Pan Card', isHaveNumber:true, isNumberRequired:false, isHaveFront:true, isHaveBack:false},
  ];

  
}
