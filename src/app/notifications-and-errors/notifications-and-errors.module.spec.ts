import { NotificationsAndErrorsModule } from './notifications-and-errors.module';

describe('NotificationsAndErrorsModule', () => {
  let notificationsAndErrorsModule: NotificationsAndErrorsModule;

  beforeEach(() => {
    notificationsAndErrorsModule = new NotificationsAndErrorsModule();
  });

  it('should create an instance', () => {
    expect(notificationsAndErrorsModule).toBeTruthy();
  });
});
