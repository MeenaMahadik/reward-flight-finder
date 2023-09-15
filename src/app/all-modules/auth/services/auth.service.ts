import { Injectable } from '@angular/core';
import { endPoints } from 'src/app/core/config';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoints = endPoints.users;
  constructor(private apiService:ApiService) { }
  login(req:any){
    return this.apiService.post(this.endPoints.login, req);
  }

  register(req:any){
    return this.apiService.post(this.endPoints.register, req);
  }

  forgotPassword(req:any){
    return this.apiService.post(this.endPoints.login, req);
  }
}
