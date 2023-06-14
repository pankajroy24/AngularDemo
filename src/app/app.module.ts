
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './Directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './Forms/TemplateForms/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './Forms/TemplateForms/course-form/course-form.component';
import { SignupFormComponent } from './Forms/ReactiveForms/signup-form/signup-form.component';
import { NewCourseFormComponent } from './Forms/ReactiveForms/new-course-form/new-course-form.component';



@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
