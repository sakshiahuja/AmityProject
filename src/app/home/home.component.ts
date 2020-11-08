import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  mySlideImages = [1,2,3,4,5,6].map((i)=> `assets/image${i}.png`);
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`assets/image${i}.png`);
  mySlideImages2 = [1,2,3,4,5,6].map((i)=> `assets/image${i}.png`);
  mySlideImages3 = [1,2,3,4,5,6].map((i)=> `assets/image${i}.png`);
  mySlideImages4 = [1,2,3,4,5,6].map((i)=> `assets/image${i}.png`);


  mySlideOptions={items: 6, dots: true, nav: false, autoplay:true, autoplayTimeout:1500 ,    autoplayHoverPause:true, loop:true };
  myCarouselOptions={items: 7, nav: true };
}