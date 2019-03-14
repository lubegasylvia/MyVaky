import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UploadService } from '../uploads/shared/upload.service';
import { Upload } from '../uploads/shared/upload';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;  
  currentUser: firebase.User;
  state:string = '';
  error:string= '';
  constructor(public af: AngularFireAuth, private router: Router, private upSvc: UploadService) { 

    this.af.auth.onAuthStateChanged(auth => {
      if(auth){
        this.currentUser = auth;
      }
    });
  }
    

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, `/profiles/${this.currentUser.uid}`,
      (upload) => {
        this.currentUser.updateProfile({
          displayName: this.currentUser.displayName,
          photoURL: upload.url
        }).then( 
          (success) =>{
            this.router.navigate(['/profile'])
        }).catch(
          (err) => {
            this.error = err;
        });
      });
  }

  onSubmit(formData){
    if(formData.form.valid){
      console.log(formData.form.value);
      this.currentUser.updateProfile({
        displayName: formData.form.value.name,
        photoURL: formData.form.value.pictureUrl
      }).then( 
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
