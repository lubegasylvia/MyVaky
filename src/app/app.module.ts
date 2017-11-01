import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import {MatCardModule} from '@angular/material';


import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthGuard } from './auth.service';
import { routes } from './app.rout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChangeComponent } from './profile-change/profile-change.component';
import { ManuComponent } from './manu/manu.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA81fDc8UMgsBf04ay-HN-ICV2VLepyTrI",
  authDomain: "appfirebase-10481.firebaseapp.com",
  databaseURL: "https://appfirebase-10481.firebaseio.com",
  storageBucket: "appfirebase-10481.appspot.com",
  messagingSenderId: "486457951522"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ProfileComponent,
    ProfileChangeComponent,
    ManuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule

    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
