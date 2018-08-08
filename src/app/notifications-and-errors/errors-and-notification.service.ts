import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ErrorsComponent} from './errors/errors.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorsAndNotificationService {
  viewRef;
  constructor(private resolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) { }

  displayToast(message){

  }
  addElement(){
this.createAndAddComponent();
  }
  createAndAddComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(ErrorsComponent);
    // const componentRef = componentFactory.create(this.injector);
    // const componentRootNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // const componentRootViewContainer = this.applicationRef['components'][0];
    // const container = (componentRootViewContainer.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // this.applicationRef.attachView(componentRef.hostView);
    // componentRef.onDestroy(() => {
    //   this.applicationRef.detachView(componentRef.hostView);
    // });
    // container.appendChild(componentRootNode);
    this.viewRef.createComponent(componentFactory);
  }
}
