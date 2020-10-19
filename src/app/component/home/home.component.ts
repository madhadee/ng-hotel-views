import { ReviewDialogComponent } from './../review-dialog/review-dialog.component';
import { HotelsService } from './../../services/hotels.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() locale: string;
  hotelsList: any[];
  originalEnList: any[];

  constructor(private hotelsService: HotelsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.hotelsService.getHotels('en').subscribe(enList => {
      // Original English Data Array
      this.originalEnList = [...enList];
      // First Init Hotel Data Array as empty
      this.hotelsList = [];
      this.getHotels(this.locale);
    });

  }

  /* Triggers when locale is updated from app component */
  ngOnChanges(changes: SimpleChanges): void {
    if (this.originalEnList) {
      this.getHotels(this.locale);
    }
  }

/* Calls hotel service to get the hotel data based on the locale selected.
The function also merges the available translations to the english data */
  getHotels(locale: string): void {
    this.hotelsService.getHotels(locale).subscribe(
      res => {
        if (res) {
          const tempList = [...res];
          if (this.hotelsList && this.originalEnList) {
            // reset list to english before changing language
            this.hotelsList = [];
            this.originalEnList.forEach(x => {
              this.hotelsList.push({ ...x });
            });
            // loop the api dataset
            tempList.forEach(apiData => {
              this.hotelsList.forEach(localData => {
                // match the id from the english hotel list to the api list and replace values to those that has a translation available
                if (localData.id === apiData.id) {
                  localData.name = apiData.name;
                  localData.description = apiData.description;
                  localData.address = apiData.address;
                }
              });
            });
          }
        }
      }
    );
  }

  /* Parse the reviews data to the dialog service */
  viewReviews(reviews: any): void {
    // check if reviews has data
    if (reviews.length > 0) {
      this.dialog.open(ReviewDialogComponent, { data: reviews });
    }
  }

}
