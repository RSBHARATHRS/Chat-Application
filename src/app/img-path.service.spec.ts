import { TestBed } from '@angular/core/testing';

import { ImgPathService } from './img-path.service';

describe('ImgPathService', () => {
  let service: ImgPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
