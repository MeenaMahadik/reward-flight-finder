import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FeatureSharedModule } from '../../shared/feature-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StepsModule,
    SharedModule,
    FeatureSharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
