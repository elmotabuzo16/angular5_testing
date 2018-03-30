import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';


@NgModule({

  // decorations: this is where we add all of our components that part of this module
  declarations: [
    AppComponent, 
    CoursesComponent, 
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
