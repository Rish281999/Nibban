import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http : HttpClient) { }

  // form: FormGroup = new FormGroup({
  //   fullName : new FormControl('', Validators.required),
  //   email : new FormControl('',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   message : new FormControl('')

  // });

  // initializeFormGroup(){
  //   this.form.setValue({
  //     $key: null,
  //     fullName: '',
  //     email: '',
  //     message: ''
  //   });
  // }

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
