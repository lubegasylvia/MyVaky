import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // host:{'[@moveIn]':''}
})
export class ProfileComponent {

  currentUser: firebase.User;
  state:string = '';
  error:string= '';
  postsRef: AngularFireList<any>;
  posts: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, private router: Router) { 

    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth){
        this.currentUser = auth;
        this.postsRef = this.afDatabase.list('/posts');
          // Use snapshotChanges().map() to store the key
          this.posts = this.postsRef.snapshotChanges().map(changes => {
            console.log("post hanges", changes);
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });
        
      }
    });
  }
 
  addPost(newName: string) {
    this.postsRef.push({ title: newName });
  }
  updatePost(key: string, newText: string) {
    this.postsRef.update(key, { title: newText });
  }
  deletePost(key: string) {    
    this.postsRef.remove(key); 
  }
  deleteEverything() {
    this.postsRef.remove();
  }
}
