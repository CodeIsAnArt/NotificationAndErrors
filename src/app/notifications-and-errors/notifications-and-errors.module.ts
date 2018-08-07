import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications/notifications.component';
import {ErrorsComponent} from './errors/errors.component';
import {ShowNotificationToastDirective} from './show-notification-toast.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationsComponent, ErrorsComponent, ShowNotificationToastDirective],
  exports: [NotificationsComponent, ShowNotificationToastDirective],
  entryComponents: [
    NotificationsComponent],
})
export class NotificationsAndErrorsModule {
}
