import { TestBed, inject } from '@angular/core/testing';

import { ErrorsAndNotificationService } from './errors-and-notification.service';

describe('ErrorsAndNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsAndNotificationService]
    });
  });

  it('should be created', inject([ErrorsAndNotificationService], (service: ErrorsAndNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
