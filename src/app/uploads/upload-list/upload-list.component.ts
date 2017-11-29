import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'uploads-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads()
    this.uploads.subscribe(() => this.showSpinner = false)
  }


}