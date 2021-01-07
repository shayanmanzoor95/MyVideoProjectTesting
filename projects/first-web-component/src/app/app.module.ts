import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { MyvideoplayerComponent } from './myvideoplayer/myvideoplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyvideoplayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector : Injector){}
  }
