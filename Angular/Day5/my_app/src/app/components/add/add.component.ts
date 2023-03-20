import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  student: any = {};
  myForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl(''),
  });
  constructor(private std: StudentService) {}
  addStudent() {
    this.std.addStudent(this.myForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
