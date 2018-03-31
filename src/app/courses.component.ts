import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//decorator function
@Component({
    selector: 'courses', // <div class="courses" will be ".courses"

    
    template: `
        {{ courses.title | uppercase }} <br/>
        {{ courses.rating | number:'2.2-2' }} <br/>
        {{ courses.students | number }} <br/>
        {{ courses.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ courses.releseDate | date:'shortdate' }} <br/>
        ` 
})

// we need to export the class in order to see it in angular
export class CoursesComponent {
    courses = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releseDate: new Date(2018, 3, 31)
    }
}