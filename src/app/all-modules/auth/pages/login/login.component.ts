import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService, ToasterService, UserService } from 'src/app/shared/services';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { StorageItemKeys } from 'src/app/shared/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  isSubmited:boolean=false;
  isLoading:boolean=false;

  constructor(private fb:FormBuilder, private router:Router, private toasterService:ToasterService,
              private authService:AuthService, private storageService:StorageService, private userService:UserService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', Validators.required],
      role:['admin']
    })
  }

  onSubmit(){
    this.isSubmited = true;
    this.isLoading  = true;
    if(this.loginForm.invalid){
      this.isLoading = false;
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res:any)=>{
        let data  = res?res:{};
        this.isLoading  = false;
        data.authToken     = data.id_token;
        data.refreshToken  = data.refresh_token;
        
        let userDetails = data?.user?data?.user:{};
        userDetails.userId   = userDetails.user_id;
        
        if(data.authToken && data.refreshToken && userDetails.userId){
         this.storageService.setAuthToken(data.authToken).then(()=>{
          this.storageService.setRefreshToken(data.refreshToken).then(()=>{

            // set user details in observable then redirect to dashbard:
            this.storageService.setItem(StorageItemKeys.userId, userDetails.userId);
            this.userService.setUserDetailsSubject(userDetails);
            this.isSubmited = false;
            this.isLoading  = false;
            this.router.navigate(['/']);
          })
         })
        }else{
          this.toasterService.toast('Something went wrong');
        }
      },
      error: (error)=>{
        this.isSubmited = false;
        this.isLoading  = false;
        let message = error?.error?.message?error?.error?.message:'Something went wrong';
        this.toasterService.toast(message);
      }
   });
  }

  get formControls(){
    return this.loginForm.controls;
  }
}
