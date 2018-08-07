import {AfterViewInit, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, ViewContainerRef} from '@angular/core';
import {NotificationsComponent} from './notifications/notifications.component';

@Directive({
  selector: '[appShowNotificationToast]'
})
export class ShowNotificationToastDirective implements AfterViewInit {

  private notificationCompRef: ComponentRef<NotificationsComponent>;
  factory: any;

  constructor(private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    // factory comp resolver
    this.factory = this.resolver.resolveComponentFactory(NotificationsComponent);
    // this.notificationCompRef.instance.toastState = 'active';
  }

  addKB() {
    this.notificationCompRef = this.viewContainerRef.createComponent(this.factory);
  }
}
