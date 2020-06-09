import { Component, OnInit } from '@angular/core';
import {RegistrationService } from '../../services/registration.service';
import { FormControl , FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    models: string[]=[
      'BMW S Class	','Jeep','Activa','Swift'
    ];
    registerForm: FormGroup;
    validMessage: String="";
  constructor(private registrationService :RegistrationService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl(),
      contact:new FormControl()


    });

  }

  submitRegistration()
  {
    if(this.registerForm.valid){
      this.validMessage="Your Record Has been Updated Successfully";
      this.registrationService.createRegistration(this.registerForm.value).subscribe(
        data=>{
        this.registerForm.reset();
        return true;
      },
        
      err=>{
        return Observable.throw(err)
      }
          
      )
    }
    else{
      this.validMessage="Please FIll out the form Before submitting";
    }


  }


}
