import { TestBed } from '@angular/core/testing';

import { BasicAdminService } from './basic-admin.service';

describe('BasicAdminService', () => {
  let service: BasicAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
