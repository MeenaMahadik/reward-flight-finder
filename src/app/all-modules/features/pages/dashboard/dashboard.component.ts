import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activeIndex:number = 3;
  items:MenuItem[] = [{
    label: 'Personal',
    styleClass: this.activeIndex >= 0 ? 'complete' : 'disabled',
    routerLink: '/dashboard'
},
{
    label: 'Seat',
    styleClass: this.activeIndex >= 1 ? 'complete' : 'disabled',
    routerLink: '/dashboard/s'
},
{
    label: 'Payment',
    styleClass: this.activeIndex >= 2 ? 'complete' : 'disabled',
    routerLink: 'payment'
},
{
    label: 'Confirmation',
    styleClass: this.activeIndex >= 3 ? 'complete' : 'disabled',
    routerLink: 'confirmation'
}
];
}
