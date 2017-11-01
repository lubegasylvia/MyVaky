import { Component, OnInit, HostBinding } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {
  error: any;
  
  constructor(public af: AngularFireAuth,private router: Router) {

      this.af.auth.onAuthStateChanged(auth => {
        if(auth){
          this.router.navigateByUrl('/profile');
        }
      });
   }
   loginFb(){
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        this.router.navigate(['/profile']);
        }).catch(
        (err) => {
        this.error = err;

        })
   }


   loginGoogle(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then(
       (success) => {
       this.router.navigate(['/profile']);
       }).catch(
       (err) => {
       this.error = err;

       })
  }
     
  ngOnInit() {
  }

}
