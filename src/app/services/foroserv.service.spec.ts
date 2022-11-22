import { TestBed } from '@angular/core/testing';

import { ForoservService } from './foroserv.service';

describe('ForoservService', () => {
  let service: ForoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
