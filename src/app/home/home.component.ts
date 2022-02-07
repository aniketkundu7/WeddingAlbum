import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayLeftSidebar: boolean=false;
  images:any[]=[
    {
      "previewImageSrc": "assets/galleria/galleria1.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria1s.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/galleria/galleria2.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria2s.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
    },
    {
      "previewImageSrc": "assets/galleria/galleria3.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria3s.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "assets/galleria/galleria4.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria4s.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
    },
    {
      "previewImageSrc": "assets/galleria/galleria5.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria5s.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
    },
    {
      "previewImageSrc": "assets/galleria/galleria6.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria6s.jpg",
      "alt": "Description for Image 6",
      "title": "Title 6"
    },
    {
      "previewImageSrc": "assets/galleria/galleria7.jpg",
      "thumbnailImageSrc": "assets/galleria/galleria7s.jpg",
      "alt": "Description for Image 7",
      "title": "Title 7"
    }
]
  constructor() { }
  
  ngOnInit(): void {
  }

}
