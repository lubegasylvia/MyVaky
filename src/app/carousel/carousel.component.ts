import { Component, OnInit } from '@angular/core';
import {Image} from './image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public images = IMAGES;
  
  constructor() { }

  ngOnInit() {
  }

}

var IMAGES: Image[] = [
  { "title": "All about planets", "url": "assets/images/9504875870_42fed26eeb_b.jpg" },
  { "title": "All about planets", "url": "assets/images/15798179264_5088f2bb0d_h.jpg" },
  { "title": "All about planets", "url": "assets/images/10405891035_4e7955a9fd_b.jpg" },
  { "title": "All about planets", "url": "assets/images/8073515704_b7cdaec972_b.jpg" },
  {"title": "All about planets", "url": "assets/images/33633675924_b198c4452d_z.jpg"},
  
  // { "title": "All about planets", "url": "assets/images/4966000023_91a7678967_z.jpg" }
  //{ "title": "All about planets", "url": "assets/images/6882954598_981432a0ae_b.jpg" }
    


]; 