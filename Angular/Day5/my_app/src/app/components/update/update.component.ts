import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  student: any = {};
  myForm!: FormGroup;
  constructor(
    private std: StudentService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.std.getStudent(this.activeRoute.snapshot.params['id']).subscribe({
      next: (data) => {
        this.student = data;
        this.myForm = new FormGroup({
          name: new FormControl(this.student.name),
          age: new FormControl(this.student.age),
          email: new FormControl(this.student.email),
          phone: new FormControl(this.student.phone),
          address: new FormControl(this.student.address),
          salary: new FormControl(this.student.salary),
        });
      },
    });
  }
  editStudent() {
    this.std
      .updateStudent(this.activeRoute.snapshot.params['id'], this.myForm.value)
      .subscribe((data) => {
        this.student = data;
      });
  }
}
