import { TestBed, async, inject } from '@angular/core/testing';

import { SignUpInGuard } from './sign-up-in.guard';

describe('SignUpInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpInGuard]
    });
  });

  it('should ...', inject([SignUpInGuard], (guard: SignUpInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
