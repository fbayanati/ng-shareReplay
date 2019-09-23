import { TestBed } from '@angular/core/testing';

import { FecthDataService } from './fecth-data.service';

describe('FecthDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FecthDataService = TestBed.get(FecthDataService);
    expect(service).toBeTruthy();
  });
});
