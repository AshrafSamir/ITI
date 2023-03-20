import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form!: FormGroup;
  errorMessage: string = 'Unvalid Input Try Again';
  studentEvent = new EventEmitter();
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(20),
        Validators.max(40),
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form);
    if (this.form.valid) {
      this.errorMessage = '';
      this.studentEvent.emit(this.form.value);
    } else {
      this.errorMessage = 'Unvalid Input Try Again';
    }
  }
}
