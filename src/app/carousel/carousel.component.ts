import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement/advertisement.service';
import * as data from 'src/app/home_en.json';
interface Student {  
  id: Number;  
  name: String;  
  imagePath: String;  
  isEnable: String;  
}  

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  responsiveOptions: any;
  images = [  

  ];
 carouselDataResponse: any = (data as any).default;

  constructor(private advertisementService: AdvertisementService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '680px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    for(let i=0;i<this.carouselDataResponse.length;i++){
      if(this.carouselDataResponse[i].name=="carousel1"){
        this.images=this.carouselDataResponse[i].imagePath.split(",")
      }
    }
    /*this.advertisementService.getAdvertisement().subscribe((data)=>{
      this.carouselDataResponse = this.products[1];
      for(let i=0;i<data.length;i++){
        if(data[i].name=="carousel1"){
          this.images=data[i].imagePath.split(",")
        }
      }
      
    })*/
  }

}
