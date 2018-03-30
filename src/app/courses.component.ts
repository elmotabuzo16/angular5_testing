import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    //this will render the app.component.html using <courses></courses>
    //<h2 [textContent]="title" />
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    onKeyUp(email) {
        console.log(email);
    }
}