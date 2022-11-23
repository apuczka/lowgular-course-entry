import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {CreateEmployeeModel} from "../../model/create-employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    salary: new FormControl(null, [ Validators.required])

  });

  onButtonClicked(form: { name:string, age:number, salary:number}) {
    alert('User was successfully added to the database. Name: ' + form.name + ', Age: ' + form.age + ', Salary: ' + form.salary);
  }

  // onFormSubmitted(form: CreateEmployeeModel)

}
