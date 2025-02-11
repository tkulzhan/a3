import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Routing configuration
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Root component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Contains the lazy-loaded route definitions
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
