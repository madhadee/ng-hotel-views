import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';

describe('HotelsService', () => {
  let service: HotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data from getHotels("en")', () => {
    expect(service.getHotels('en')).toBeTruthy();
  });
});
