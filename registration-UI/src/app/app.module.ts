import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './services/registration.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
