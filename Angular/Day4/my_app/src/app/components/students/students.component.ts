import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: any = [
    {
      name: 'John',
      email: 'ashrafsamer532@gmail.com',
      age: 20,
    },
    {
      name: 'Jane',
      email: 'ashrafsamer532@gmail.com',
      age: 25,
    },
    {
      name: 'Jack',
      email: 'ashrafsamer532@gmail.com',
      age: 30,
    },
  ];
}
