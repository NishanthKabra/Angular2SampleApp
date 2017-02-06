import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';

import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: Home},
      {path: '**', component: Home}
    ]),
    ProductModule //Business Module -> Also uses shared module in its dependencies
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}