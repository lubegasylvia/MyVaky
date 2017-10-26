import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.itemsRef = af.list('/messages');

    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
    // , {
    //   query: {
    //     limitToLast: 50
    //   }
    // }
    this.user = this.afAuth.authState;

  }
  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: string) {
      this.itemsRef.push({ message: desc});
      this.msgVal = '';
  }
}
