import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

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
