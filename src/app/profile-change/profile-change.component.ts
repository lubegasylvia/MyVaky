import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent implements OnInit {

    
  currentUser: firebase.User;
  state:string = '';
  error:string= '';
  constructor(public af: AngularFireAuth, private router: Router) { 

    this.af.auth.onAuthStateChanged(auth => {
      if(auth){
        this.currentUser = auth;
      }
    });
  }
    
onSubmit(formData){
  if(formData.form.valid){
    console.log(formData.form.value);
    this.currentUser.updateProfile({
      displayName: formData.form.value.name,
      photoURL: formData.form.value.pictureUrl
    }).then( 
      (success) =>{
        this.router.navigate(['/profile'])
      }).catch(
        (err) => {
          this.error = err;
        });
  }
}
  ngOnInit() {
  }

}
