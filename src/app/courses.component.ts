import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    //this will render the app.component.html using <courses></courses>
    //<h2 [textContent]="title" />
    template: `
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    email = "me@example.com"

    onKeyUp(email) {
        console.log(this.email);
    }
}