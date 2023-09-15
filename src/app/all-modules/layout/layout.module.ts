import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent, AuthFooterComponent,AppHeaderComponent,
         AppFooterComponent, AppSidebarComponent, AppMenuitemComponent } from './components';

import { RouterModule } from '@angular/router';

const components = [AuthHeaderComponent, AuthFooterComponent, AppHeaderComponent, AppFooterComponent, AppSidebarComponent, AppMenuitemComponent]
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
