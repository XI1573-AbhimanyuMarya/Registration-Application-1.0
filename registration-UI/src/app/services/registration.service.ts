import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from } from 'rxjs';
import {observable} from 'rxjs';
const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getData(){
    let token=localStorage.getItem('access_token');
    return this.http.get('/server/api/form'
    // ,    {headers:new HttpHeaders().set('Authorization','Bearer'+ token)}
    
    );
  }

  getSpecificData(id :number){
    let token=localStorage.getItem('access_token');
    return this.http.get('/server/api/form/'+id
    // ,{headers:new HttpHeaders().set('Authorization','Bearer'+token)} 
    );
  }

  createRegistration(register){
    console.log("Inside Create Registration");
    let body=JSON.stringify(register);
    return this.http.post('/server/api/form',body,httpOptions);

  }


}
