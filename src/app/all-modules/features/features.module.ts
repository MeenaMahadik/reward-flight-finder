import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
