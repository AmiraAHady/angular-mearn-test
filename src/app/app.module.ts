import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EventTestComponent } from './event-test/event-test.component';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EventTestComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
