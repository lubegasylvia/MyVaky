import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // host:{'[@moveIn]':''}
})
export class SignupComponent implements OnInit {
  state:string ='';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {

   }

   onSubmit(formData){
     if(formData.form.valid){
       this.af.auth.createUserWithEmailAndPassword(formData.form.value.email, formData.form.value.password).then(
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
