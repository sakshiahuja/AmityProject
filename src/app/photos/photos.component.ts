// import { Component, OnInit } from '@angular/core';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
 
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})


export class PhotosComponent implements OnInit {

    
    @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent

  
    // gallery configuration
    conf: GALLERY_CONF = {
      imageOffset: '0px',
      showDeleteControl: false,
      showImageTitle: false,
    };
    images: GALLERY_IMAGE[] = [
        {
          url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260", 
          altText: 'woman-in-black-blazer-holding-blue-cup', 
          title: 'woman-in-black-blazer-holding-blue-cup',
          thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
        },
        {
          url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260", 
          altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
          extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
          thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
        },
      ];
     
      constructor(){}
     

//   galleryOptions: NgxGalleryOptions[];
//     galleryImages: NgxGalleryImage[];
 
    ngOnInit(){}
    openGallery(index: number = 0) {
        this.ngxImageGallery.open(index);
      }
        
      // close gallery
      closeGallery() {
        this.ngxImageGallery.close();
      }
        
      // set new active(visible) image in gallery
      newImage(index: number = 0) {
        this.ngxImageGallery.setActiveImage(index);
      }
        
      // next image in gallery
      nextImage(index: number = 0) {
        this.ngxImageGallery.next();
      }
        
      // prev image in gallery
      prevImage(index: number = 0) {
        this.ngxImageGallery.prev();
      }
        
      /**************************************************/
        
      // EVENTS
      // callback on gallery opened
      galleryOpened(index) {
        console.info('Gallery opened at index ', index);
      }
     
      // callback on gallery closed
      galleryClosed() {
        console.info('Gallery closed.');
      }
     
      // callback on gallery image clicked
      galleryImageClicked(index) {
        console.info('Gallery image clicked with index ', index);
      }
      
      // callback on gallery image changed
      galleryImageChanged(index) {
        console.info('Gallery image changed to index ', index);
      }
     
      // callback on user clicked delete button
      deleteImage(index) {
        console.info('Delete image at index ', index);
      }
    }
    //     this.galleryOptions = [
    //         {
    //             width: '600px',
    //             height: '400px',
    //             thumbnailsColumns: 4,
    //             imageAnimation: NgxGalleryAnimation.Slide
    //         },
    //         // max-width 800
    //         {
    //             breakpoint: 800,
    //             width: '100%',
    //             height: '600px',
    //             imagePercent: 80,
    //             thumbnailsPercent: 20,
    //             thumbnailsMargin: 20,
    //             thumbnailMargin: 20
    //         },
    //         // max-width 400
    //         {
    //             breakpoint: 400,
    //             preview: false
    //         }
    //     ];
 
    //     this.galleryImages = [
    //         {
    //             small: 'assets/avatar1.jpg',
    //             medium: 'assets/avatar2.jpg',
    //             big: 'assets/avatar3.jpg'
    //         },
    //         {
    //             small: 'assets/avatar4.jpg',
    //             medium: 'assets/avatar5.jpg',
    //             big: 'assets/avatar6.jpg'
    //         },
    //         {
    //             small: 'assets/avatar1.jpg',
    //             medium: 'assets/avatar2.jpg',
    //             big: 'assets/avatr3.jpg'
    //         }
    //     ];
    // }
