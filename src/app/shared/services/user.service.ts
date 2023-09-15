import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services';
import { StorageService } from './storage.service';
import { endPoints } from 'src/app/core/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails:any={};
  userDetailsSubject = new BehaviorSubject<any>(null);
  endPoints = endPoints.users;

  constructor(private apiService:ApiService, private storageService:StorageService) { }
  
  getLoogedInUserDetails(){
    this.details(this.storageService.userId).subscribe({
      next: (res:any)=>{
        let userDetails = res?.data?res?.data:{};
        this.setUserDetailsSubject(userDetails);
    },error: (error)=>{
      this.setUserDetailsSubject();
    }})
  }

  setUserDetailsSubject(data:any=null){
    this.userDetails = data;
    this.userDetailsSubject.next(data)
  }

  getCurrentUserDetails(){
    if(!this.userDetails?.userId){
     this.getLoogedInUserDetails();
    }
    return this.userDetailsSubject.asObservable();
  }

  clearUserDetailsSubject(){
   this.userDetails = {};
   this.setUserDetailsSubject();
  }

  // get user details
  details(userId:string|number|null){
    return this.apiService.get(this.endPoints.details(userId));
  }

  refreshToken(userId:string|number|null, req:any={}){
    return this.apiService.post(this.endPoints.refreshToken(userId), req);
  }
}
