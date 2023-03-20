import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-regesteration',
  templateUrl: './regesteration.component.html',
  styleUrls: ['./regesteration.component.css'],
})
export class RegesterationComponent {
  validation = false;
  studentAge = '';
  studentName = '';
  @Output() studentEvent = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  addStudent(event: any) {
    event.preventDefault();
    if (
      +this.studentAge > 20 &&
      +this.studentAge < 40 &&
      this.studentName.length > 3
    ) {
      this.validation = false;
      const student = {
        name: this.studentName,
        age: this.studentAge,
      };

      this.studentEvent.emit(student);
    } else {
      this.validation = true;
    }
  }
}
