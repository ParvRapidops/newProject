import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { materialize } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { MiddleComponent } from './Header/header/Middle/middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
