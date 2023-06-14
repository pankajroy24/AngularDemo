import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  
  log(x:NgModel)
  {
     //console.log(x);
  }

  submit(x:NgForm)
  {
    console.log(x);
  }

}
