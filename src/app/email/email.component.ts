import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  // host:{'[@moveIn]':''}
})
export class EmailComponent implements OnInit {

      state:string = '';
      error: any;

  constructor(public af: AngularFireAuth,private router: Router) {
    
          this.af.auth.onAuthStateChanged(auth =>{
            if(auth){
              this.router.navigateByUrl('/profile');
            }
          });
       }

       onsubmit(formData){
        if(formData.valid){
          console.log(formData.value);
          this.af.auth.signInWithEmailAndPassword(
            formData.value.email,
            formData.value.password).then(
            (success) => {
              console.log(success);
              this.router.navigate(['/profile']);
            }).catch(
              (err) => {
              console.log(err);
                this.error = err;
              })
        }
      }

  ngOnInit() {
  }

}
