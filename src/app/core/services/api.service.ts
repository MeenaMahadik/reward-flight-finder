import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(endpoint: string, req: any) {
    let param = new HttpParams();
    param = req;
    return this.http.post(endpoint, param);
  }

  get(endpoint: string, req:any ={}) {
    let param = new HttpParams();
    param = req;
    return this.http.get(endpoint, {params:param});
  }

  put(endpoint: string, req: any, headers?: any) {
    let param = new HttpParams();
    param = req;
    return this.http.put(endpoint, param, headers)
  }

  patch(endpoint: string, req: any) {
    let param = new HttpParams();
    param = req;
    return this.http.patch(endpoint, param)
  }

  fetch(endpoint: string, req: any) {
    let param = new HttpParams();
    param = req;
    return this.http.put(endpoint, param)
  }

  delete(endpoint: string, req:any={}, isReqBody:boolean=false) {
    if(isReqBody){
      let param = new HttpParams();
      param = req;
      return this.http.delete(endpoint, {params:param});
    }else{
      return this.http.delete(endpoint, {body:req} );
    }
  }
}
