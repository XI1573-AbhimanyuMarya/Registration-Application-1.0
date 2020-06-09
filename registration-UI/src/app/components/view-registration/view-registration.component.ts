import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private route: ActivatedRoute) { }
  public dataRegister;
  ngOnInit() {
    this.getRegistration(this.route.snapshot.params.id)
    
    
  }
  

  getRegistration(id:number){
    console.log("----------------"); 
    this.registrationService.getSpecificData(id).subscribe(
      data=> this.dataRegister=data,
      err=>console.log(err),
      ()=>console.log("Get Registration for specific Id")

    );
  }



}
