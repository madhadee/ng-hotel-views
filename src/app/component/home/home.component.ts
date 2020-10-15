import { ReviewDialogComponent } from './../review-dialog/review-dialog.component';
import { HotelsService } from './../../services/hotels.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() locale: string;
  hotelsList: any[];

  constructor(private hotelsService: HotelsService, public dialog: MatDialog) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
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
        if (res){
          this.hotelsList = res;
        }
      }
    );
  }

  viewReviews(reviews: any): void{
    if (reviews.length > 0){
      this.dialog.open(ReviewDialogComponent, {data: reviews});
    }
  }

}
