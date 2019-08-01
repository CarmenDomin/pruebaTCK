import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {NavigatorComponent} from './components/navigator/navigator.component';
import {StarsComponent} from './components/stars/stars.component';
import {RadioButtonComponent, RadioGroupComponent} from './components/radio-buttons/index';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PageOneComponent,
    PageTwoComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'page-one',
        component: PageOneComponent,
      },
      {
        path: 'page-two',
        component: PageTwoComponent,
      },
      {
        path: '**',
        redirectTo: 'page-one',
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
