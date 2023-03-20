import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegesterationComponent } from './components/regesteration/regesteration.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [AppComponent, RegesterationComponent, StudentsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
