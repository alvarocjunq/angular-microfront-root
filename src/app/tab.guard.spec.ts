import { TestBed, async, inject } from '@angular/core/testing';

import { TabGuard } from './tab.guard';

describe('TabGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabGuard]
    });
  });

  it('should ...', inject([TabGuard], (guard: TabGuard) => {
    expect(guard).toBeTruthy();
  }));
});
