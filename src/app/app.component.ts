import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'librarymanagementmean';

  baseUri:string = 'http://localhost:3000/api';

  constructor(private fb: FormBuilder , private _http : HttpClient) {}

  registerform: FormGroup;

  ngOnInit() {

    this.registerform = this.fb.group({

      name: ['hasnain', Validators.required],
      password: ['123', [Validators.required, Validators.minLength(2)]],
      role: ['admin', [Validators.required]],

    });
    
    this.getEmployees().subscribe((res) =>  {
      console.log(res)
    },(error) => {
      console.log(error.status);
    });
  }
  onSubmit(){
    console.log(this.registerform)
  }
  getEmployees() {
    return this._http.get(`${this.baseUri}/loginroutes`);
  }
  

}
