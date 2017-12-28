import { TestBed, inject } from '@angular/core/testing';

import { EachserviceService } from './eachservice.service';

describe('EachserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EachserviceService]
    });
  });

  it('should be created', inject([EachserviceService], (service: EachserviceService) => {
    expect(service).toBeTruthy();
  }));
});
