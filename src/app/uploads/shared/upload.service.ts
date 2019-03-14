import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Upload } from './upload';
import { Observable } from 'rxjs/Observable';
import { storage } from 'firebase/app';

@Injectable()
export class UploadService {

  constructor(private db: AngularFireDatabase) { }
  
 
 
  uploads: Observable<Upload[]>;
  private basePath:string = '/uploads';
  // uploads: FirebaseListObservable<Upload[]>;

  getUploads() {
    this.uploads = this.db.list(this.basePath).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.val()
        const $key = a.payload.key;
        return { $key, ...data };
      });
    });
    return this.uploads
  }

  pushUpload(upload: Upload, path?: string, saveFunction?: any) {
    let storagePath = `${this.basePath}/${upload.file.name}`;
    if(path != null) {
      storagePath = path;
    }

    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(storagePath).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
       
        if (saveFunction != null) {
          saveFunction(upload)
        }
        else{
          this.saveFileData(upload);
        }
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}


