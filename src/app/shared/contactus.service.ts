import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http : HttpClient) { }

  postContactUser(data : any){
    return this.http.post<any>("http://localhost:3000/contactUsers/",data);
  }
  getContactUser(){
    return this.http.get<any>("http://localhost:3000/contactUsers/");
  }
  deleteContactUser(id:number){
    return this.http.delete<any>("http://localhost:3000/contactUsers/"+id);
  }
}
