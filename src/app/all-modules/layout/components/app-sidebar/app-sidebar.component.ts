import { Component, ElementRef } from '@angular/core';
import { LayoutService } from 'src/app/theme/layout/service/app.layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService,  public el: ElementRef) { }

  ngOnInit() {
      this.model = [
          {
              items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                { label: 'Theme', icon: 'pi pi-fw pi-home', routerLink: ['/theme/dashboard'] },
                  {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Login',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            routerLink: ['/auth/error']
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            routerLink: ['/auth/access']
                        }
                    ]
                },
              ]
          },
      ];
  }
}
