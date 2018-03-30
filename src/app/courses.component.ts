import { Component } from '@angular/core';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"
    template: '<h2>{{ getTitle() }}</h2>' //this will render the app.component.html using <courses></courses>
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    title = "List of Courses";

    getTitle() {
        return this.title;
    }
}