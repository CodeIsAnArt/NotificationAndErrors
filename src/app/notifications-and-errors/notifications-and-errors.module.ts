import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationsComponent, ErrorsComponent]
})
export class NotificationsAndErrorsModule { }
