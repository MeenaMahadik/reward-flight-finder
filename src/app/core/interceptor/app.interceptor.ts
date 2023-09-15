import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor,
         HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UserService, StorageService } from 'src/app/shared/services';
import { StorageItemKeys } from 'src/app/shared/enums';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  authToken!: string | null;
  isRefreshing!:boolean; // loading flag
  constructor(private storageService:StorageService, private userService:UserService) { }

  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      this.authToken =  this.storageService.getItem(StorageItemKeys.authToken);
      let headerData:any = { 'Content-Type': 'application/json'};
      if(this.authToken){
        headerData.idToken = this.authToken; 
      }

      let headers = new HttpHeaders(headerData);
      request = request.clone({ headers: headers });

    return next.handle(request).pipe(
      tap({
        next: (event) => {
            // if (event instanceof HttpResponse) {console.log(event?.body)}
        },
        error: (error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            const status = error.status;
            if(status === 401){
              const refreshToken = this.storageService.getItem(StorageItemKeys.refreshToken);;
              if(refreshToken  && !error.error.isLogout && error.error.refreshToken) {
                  return  this.handlerefreshToken(refreshToken);
              }else{
                const currentUrl = window.location.pathname;
                let redirectUrl = '/auth/login' 
                if(currentUrl !== '/auth/login') {
                  redirectUrl = `${redirectUrl}?redirectUrl=${currentUrl}`;
                }
                this.storageService.logOut();
                location.href = redirectUrl;
                return;
              }
            }
          }
          return error;
        }
    })

    );
  }
  
  // handle refresh token flow when existing token expired:
  private handlerefreshToken(refreshToken:string|null) {
		if(!this.isRefreshing){
		  this.isRefreshing = true;
		  const userId = this.storageService.getItem(StorageItemKeys.userId);
      return this.refreshToken(userId, refreshToken).pipe(
        switchMap((res:any)=>{
          this.isRefreshing = false;
          let newAuthToken = res?.data?.idToken;
				  let newRefreshToken = res?.data?.refreshToken;

          if(newAuthToken && newRefreshToken){
            this.storageService.setAuthToken(newAuthToken).then(() => {
              this.storageService.setRefreshToken(newRefreshToken);
              location.reload();
            });
          }else{
            this.storageService.logOut();
					  location.href = '/auth/login';
          }
          return EMPTY;
        })
      );
		}else{
      return EMPTY;
    }
	}

  // call refresh token api and return observable 
  refreshToken(userId: number | string |null, refreshToken: string|null) {
		let  req: any = { refreshToken: refreshToken};
		return this.userService.refreshToken(userId, req)
	}
}
