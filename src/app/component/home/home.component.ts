import { HotelsService } from './../../services/hotels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.getHotels('en');
  }

  getHotels(locale: string): void{
    this.hotelsService.getHotels(locale).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
