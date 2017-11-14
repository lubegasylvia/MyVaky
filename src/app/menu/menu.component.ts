import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, 
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
     iconRegistry.addSvgIcon(
       'thumbs-up',
     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   }

 

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
