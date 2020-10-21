import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  abc = false;
  baseUri:string = 'http://localhost:3000/api';
  constructor(private fb: FormBuilder , private _http : HttpClient) { }
  registerform: FormGroup;
  ngOnInit(): void {
    this.registerform = this.fb.group({

      name: ['hasnain', Validators.required],
      password: ['123', [Validators.required, Validators.minLength(2)]],
      role: ['admin', [Validators.required]],

    });
    
    this.getEmployees().subscribe((res) =>  {
      console.log(res)
    },(err) => {
      if(err.name == "HttpErrorResponse"){
        console.log("mongodb or server not connected");
      }
      else{
        console.log("some other error from server side");
      }
    });
  }
  onSubmit(){
    console.log(this.registerform)
  }
  getEmployees() {
    return this._http.get(`${this.baseUri}/loginroutes`);
  }
  }
