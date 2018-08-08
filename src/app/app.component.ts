import {Component, OnInit} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ErrorsAndNotificationService} from './notifications-and-errors/errors-and-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  toastState;

  constructor(private  http: HttpClient,
              private errorsAndNotificationService: ErrorsAndNotificationService) {

  }

  toggleState() {
   this.errorsAndNotificationService.addElement();

    // if (this.toastState === 'active') {
    //   this.toastState = 'inactive';
    // } else {
    //   this.toastState = 'active';
    // }
  }

  ngOnInit() {
    this.http.get('http://www.json-generator.com/apie/json/get/cpMdeaaymq?indent=2')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
