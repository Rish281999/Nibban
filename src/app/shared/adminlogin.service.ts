import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http : HttpClient) { }
  getAdminLogin(){
    return this.http.get<any>("http://localhost:3000/adminLogin/");
  }
}
