import { TestBed } from '@angular/core/testing';

import { EmailVerficationService } from './email-verfication.service';

describe('EmailVerficationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailVerficationService = TestBed.get(EmailVerficationService);
    expect(service).toBeTruthy();
  });
});
