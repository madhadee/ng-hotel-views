import { HotelsService } from './../../services/hotels.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() locale: string;
  hotelsList: any[];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    // if (this.locale){
    //   this.getHotels(this.locale);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // tslint:disable-next-line: forin
    for (const item in changes) {
      const chng = changes[item];
      if ((chng.currentValue)){
        this.getHotels(String(chng.currentValue));
      }
    }
  }

  changeLanguage(locale: string): void{
    this.getHotels(locale);
  }

  getHotels(locale: string): void{
    this.hotelsService.getHotels(locale).subscribe(
      res => {
        console.log(res);
        if (res){
          this.hotelsList = res;
        }
      }
    );
  }

  viewReviews(){

  }

}
