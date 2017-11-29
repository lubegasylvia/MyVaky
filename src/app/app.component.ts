import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyVaKy';
  user: Observable<firebase.User>;
  isLoggedIn:boolean = false;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;

    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth){
        this.isLoggedIn = true;
      }
      else{ this.isLoggedIn = false;
      }
    });
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

}
