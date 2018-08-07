import {Component, OnInit} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent implements OnInit {
  title = 'app';
  toastState;

  constructor(private  http: HttpClient) {

  }

  toggleState() {
    if (this.toastState === 'active') {
      this.toastState = 'inactive';
    } else {
      this.toastState = 'active';
    }
  }

  ngOnInit() {
    this.http.get('http://www.json-generator.com/apie/json/get/cpMdeaaymq?indent=2')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
