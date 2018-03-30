import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    //this will render the app.component.html using <courses></courses>
    //<h2 [textContent]="title" />
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" class="btn btn-primary">Save</button>
        </div>
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    onDivClicked() {
        console.log("Div was clicked");

    }

    onSave($event) {
        //This will remove the logs at the top "Div was clicked"
        $event.stopPropagation();
        
        console.log("Button was clicked", $event);
    }
  
}