import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.css'],
})
export class ManuComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  goToProfile() {
    this.router.navigate([ '/profile' ]);
  }
  goToProfileChange() {
    this.router.navigate([ '/profile-change' ]);
  }
  goToHome() {
    this.router.navigate([ '/' ]);
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate([ '/' ]);
    
}
  ngOnInit() {
  }

}
