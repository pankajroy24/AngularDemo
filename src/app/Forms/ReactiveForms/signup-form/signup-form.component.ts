import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  reactiveForm=new FormGroup(
    {
      account: new FormGroup(
        {
          username:new FormControl('',[
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
            UsernameValidators.cannotContainSpace,
           
          ],
          [
            UsernameValidators.shouldBeUnique
          ]
          ),
          password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])

        }
      )
      
    }
  )

  get username()
  {
    return this.reactiveForm.get('account.username');
  }

  get password()
  {
    return this.reactiveForm.get('account.password');
  }

  login()
  {
     this.reactiveForm.setErrors(
      {
        invalidLoginForm:true
      }
     );
  }
}
