import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SliderComponent {

}

