import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services';
import { UserService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements  OnInit{

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  userDetails:any={};
  userDetailSubscription$!:Subscription;
  constructor(public layoutService: LayoutService, private userService:UserService) { }
  ngOnInit(): void {
    this.userDetailSubscription$ = this.userService.getCurrentUserDetails().subscribe((res:any)=>{
     this.userDetails = res;
     console.log("this.userDetails", this.userDetails)
    })
  }
}
