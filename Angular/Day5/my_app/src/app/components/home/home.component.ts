import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  students!: any;
  constructor(private stdService: StudentService, private router: Router) {}
  ngOnInit() {
    this.stdService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteStudent(student: any) {
    this.stdService.deleteStudent(student.id).subscribe({
      next: (data) => {
        this.students = this.students.filter((s: any) => s.id !== student.id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  editStudent(student: any) {
    this.router.navigateByUrl('/update/' + student.id);
  }
}
