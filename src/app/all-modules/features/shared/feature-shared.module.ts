import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocumentsComponent } from './components';
import { CenterDialogModalComponent } from './dialog-modals/center-dialog-modal/center-dialog-modal.component';


const comp = [UploadDocumentsComponent]
@NgModule({
  declarations: [
    ...comp,
    CenterDialogModalComponent
  ],
  exports:[...comp],
  imports: [
    CommonModule
  ]
})
export class FeatureSharedModule { }
