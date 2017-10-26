import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft} from '../router.animation';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[moveIn(), fallIn(), moveInLeft()],
  host:{'[@moveIn]':''}
})
export class ProfileComponent implements OnInit {

  currentUser: firebase.User;
  state:string = '';
  
  constructor(public af: AngularFireAuth, private router: Router) { 

    this.af.auth.onAuthStateChanged(auth => {
      if(auth){
        this.currentUser = auth;
      }
    });
  }

  logout(){
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');  
  }

  ngOnInit() {
  }

}
