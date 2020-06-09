import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public results; 
  constructor(private registrationService :RegistrationService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(){
    this.registrationService.getData().subscribe(
      data=>{this.results=data},
      err=>console.error(err),
      ()=>console.log("Get Results working Properly")

    );



  }

}
