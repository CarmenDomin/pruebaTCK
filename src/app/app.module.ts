import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {NavigatorComponent} from './components/navigator/navigator.component';
import {StarsComponent} from './components/stars/stars.component';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PageOneComponent,
    PageTwoComponent,
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
        component: PageOneComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
