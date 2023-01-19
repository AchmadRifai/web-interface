import { TestBed } from '@angular/core/testing';

import { JobRestService } from './job-rest.service';

describe('JobRestService', () => {
  let service: JobRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
