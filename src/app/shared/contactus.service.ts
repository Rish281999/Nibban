import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key : new FormControl(null),
    fullName : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message : new FormControl('')

  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      message: ''
    });
  }
}
