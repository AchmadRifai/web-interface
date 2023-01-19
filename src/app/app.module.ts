import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogsComponent } from './components/logs/logs.component';
import { WsConsumerComponent } from './components/ws-consumer/ws-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    WsConsumerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
