import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';


@NgModule({

  // decorations: this is where we add all of our components that part of this module
  declarations: [
    AppComponent, 
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
