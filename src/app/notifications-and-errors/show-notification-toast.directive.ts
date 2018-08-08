import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  ViewContainerRef,
  Renderer2,
  OnInit
} from '@angular/core';
import {NotificationsComponent} from './notifications/notifications.component';
import {ErrorsComponent} from './errors/errors.component';
import {ErrorsAndNotificationService} from './errors-and-notification.service';

@Directive({
  selector: '[appShowNotificationToast]'
})
export class ShowNotificationToastDirective implements OnInit {

  private notificationCompRef: ComponentRef<NotificationsComponent>;
  factory: any;

  constructor(private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private elRef: ElementRef,
              private errorsAndNotificationService: ErrorsAndNotificationService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    // factory comp resolver
    //this.addErrorsView();
    this.errorsAndNotificationService.viewRef = this.viewContainerRef;
  }

  addErrorsView() {
    this.factory = this.resolver.resolveComponentFactory(ErrorsComponent);
    this.notificationCompRef = this.viewContainerRef.createComponent(this.factory);

  }
}
