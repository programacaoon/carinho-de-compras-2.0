import { TestBed } from '@angular/core/testing';

import { JaponesService } from './japones.service';

describe('JaponesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JaponesService = TestBed.get(JaponesService);
    expect(service).toBeTruthy();
  });
});
