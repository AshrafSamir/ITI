import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   students: { [key: string]: any } = [];

  getStudent(student: any) {
    this.students['push'](student);
    console.log(this.students);
  }
}
