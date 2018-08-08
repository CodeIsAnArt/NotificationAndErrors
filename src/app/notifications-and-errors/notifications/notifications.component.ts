import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ErrorsAndNotificationService} from '../errors-and-notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        bottom: '0',
        opacity: 0,
      })),
      state('active', style({
        bottom: '20px',
        opacity: 1,
      })),
      transition('* => active', animate('200ms ease-in')),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class NotificationsComponent implements OnInit {
  public toastState = 'active';

  constructor(private errorsAndNotificationService: ErrorsAndNotificationService) {
  }

  ngOnInit() {
  }

  toggleState() {
    if (this.toastState === 'active') {
      this.toastState = 'inactive';
    } else {
      this.toastState = 'active';
    }
  }

}
