import { TestBed, inject } from '@angular/core/testing';

import { AnyserviceService } from './anyservice.service';

describe('AnyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnyserviceService]
    });
  });

  it('should be created', inject([AnyserviceService], (service: AnyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
