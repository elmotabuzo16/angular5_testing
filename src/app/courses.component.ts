import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    //this will render the app.component.html using <courses></courses>
    //<h2 [textContent]="title" />
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <table>
            <tr>
                <td [attr.colspan]="colSpan">Sample of Attribute Binding</td>
            </tr>
        </table>
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    title = "List of Courses";
    courses;
    colSpan = 2;

    //Auto instantiate the CoursesService
    //After this, add the CoursesSerivce in provider[] under app.module.ts
    //Singleton
    constructor(service: CoursesService) {
         this.courses = service.getCourses();
    }
}