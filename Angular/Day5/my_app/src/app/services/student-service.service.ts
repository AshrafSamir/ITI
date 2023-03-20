import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  db: string = 'http://localhost:3000';

  constructor(private client: HttpClient) {}
  getStudents() {
    return this.client.get(`${this.db}/students`);
  }
  getStudent(id: any) {
    return this.client.get(`${this.db}/students/${id}`);
  }
  addStudent(student: any) {
    return this.client.post(`${this.db}/students`, student);
  }
  updateStudent(id: any, student: any) {
    return this.client.put(`${this.db}/students/${id}`, student);
  }
  deleteStudent(id: any) {
    return this.client.delete(`${this.db}/students/${id}`);
  }
}
