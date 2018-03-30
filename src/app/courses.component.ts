import { Component } from '@angular/core';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    //this will render the app.component.html using <courses></courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    title = "List of Courses";
    courses = ["course1", "course2", "course3"];
}