import { HomeComponent } from './component/home/home.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-hotel-views';
  locale: string;
  @ViewChild(HomeComponent) homeComponent: HomeComponent;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  /* Set Locale as en for default or from sessionStore if not empty */
  ngOnInit(): void {
    this.locale = sessionStorage.getItem('locale') ? sessionStorage.getItem('locale') : 'en';
  }

  /* Function call when button group has changes and set sessionStorage to the latest*/
  onChange($event): void{
    this.locale = $event.value;
    sessionStorage.setItem('locale', this.locale);
  }
}
