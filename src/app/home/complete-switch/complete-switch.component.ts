import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-switch',
  templateUrl: './complete-switch.component.html',
  styleUrls: ['./complete-switch.component.scss'],
})
export class CompleteSwitchComponent implements OnInit {
  completeForm!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {}

  ngOnInit() {
    this.createForm();
  }

  submit() {}

  private createForm() {
    this.thirdFormGroup = this.ctrlContainer.form;
    this.completeForm = this.formBuilder.group({
      otpno: ['', [Validators.required]],
    });
    this.thirdFormGroup.addControl('otp', this.completeForm);
  }

  logit() {
    console.log('hello');
  }
}
