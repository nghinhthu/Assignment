import { TestBed } from '@angular/core/testing';

import { DatabaseserviceService } from './databaseservice.service';

describe('DatabaseserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseserviceService = TestBed.get(DatabaseserviceService);
    expect(service).toBeTruthy();
  });
});
