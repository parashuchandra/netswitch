import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-mnp',
  templateUrl: './mnp.component.html',
  styleUrls: ['./mnp.component.scss'],
})
export class MnpComponent implements OnInit {
  mnpForm!: FormGroup;
  mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {}

  ngOnInit() {
    this.createForm();
  }

  submit() {}

  private createForm() {
    this.mainForm = this.ctrlContainer.form;
    this.mnpForm = this.formBuilder.group({
      mnpnumber: ['', [Validators.required]],
      name: [{ value: 'Parashuram', disabled: true }],
      phno: [{ value: '7795128334', disabled: true }],
      aadhar: [{ value: '1524152554452', disabled: true }],
      address1: [{ value: 'No.159, Fort street', disabled: true }],
      address2: [{ value: 'Electronic city', disabled: true }],
      city: [{ value: 'Bangalore', disabled: true }],
      state: [{ value: 'Karnataka', disabled: true }],
      postalcode: [{ value: '560009', disabled: true }],
      accept: ['', [Validators.required]],
    });
    this.mainForm.addControl('mnp', this.mnpForm);
  }
}
