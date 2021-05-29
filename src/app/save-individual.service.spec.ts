import { TestBed } from '@angular/core/testing';

import { SaveIndividualService } from './save-individual.service';

describe('SaveIndividualService', () => {
  let service: SaveIndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveIndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
