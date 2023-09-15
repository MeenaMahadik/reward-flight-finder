import { Injectable } from '@angular/core';
import { StorageItemKeys } from '../enums';


@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() { }

  public setAuthToken(authToken: string): Promise<string> {
    return new Promise((resolve) => {
      if (authToken) {
        localStorage.setItem(StorageItemKeys.authToken, authToken);
        resolve(authToken);
      } else {
        resolve('');
      }
    });
  }

  public getAuthToken(): Promise<string> {
    return new Promise((resolve) => {
      const authToken = localStorage.getItem(StorageItemKeys.authToken);
      if (authToken) {
        resolve(authToken);
      } else {
        resolve('');
      }
    });
  }

  public setRefreshToken(refreshToken: string): Promise<string> {
    return new Promise((resolve) => {
      if (refreshToken) {
        localStorage.setItem(StorageItemKeys.refreshToken, refreshToken);
        resolve(refreshToken);
      } else {
        resolve('');
      }
    });
  }

  public getRefreshToken(): Promise<string> {
    return new Promise((resolve) => {
      const refreshToken = localStorage.getItem(StorageItemKeys.refreshToken);
      if (refreshToken) {
        resolve(refreshToken);
      } else {
        resolve('');
      }
    });
  }

  public setItem(key:StorageItemKeys, value:string){
    localStorage.setItem(key, value);
    return true;
  }

  public getItem(key:StorageItemKeys){
    return localStorage.getItem(key);
  }

  public removeItem(key:StorageItemKeys){
    localStorage.removeItem(key);
    return true;
  }

  public logOut(){
    localStorage.removeItem(StorageItemKeys.authToken);
    localStorage.removeItem(StorageItemKeys.refreshToken);
    localStorage.removeItem(StorageItemKeys.userId);
  }

  public get userId(){
    return localStorage.getItem(StorageItemKeys.userId);
  }
}
 