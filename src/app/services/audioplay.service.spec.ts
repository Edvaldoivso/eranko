import { TestBed } from '@angular/core/testing';

import { AudioplayService } from './audioplay.service';

describe('AudioplayService', () => {
  let service: AudioplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
