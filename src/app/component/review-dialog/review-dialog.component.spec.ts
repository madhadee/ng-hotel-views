import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ReviewDialogComponent } from './review-dialog.component';

describe('ReviewDialogComponent', () => {
  let component: ReviewDialogComponent;
  let fixture: ComponentFixture<ReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewDialogComponent ],
      imports: [ MatDialogModule],
      providers: [
    { provide: MAT_DIALOG_DATA, useValue: [{
      description: 'description',
      rating: 2,
      title: 'title',
      user: { name: 'name', location: 'location'}
    }] },
    { provide: MatDialogRef, useValue: {} }
  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
