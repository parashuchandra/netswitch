import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isLinear = true;

  networks: Network[];
  serviceTypes: ServiceType[];
  constructor(private formBuilder: FormBuilder) {
    this.networks = [
      {
        name: 'jio',
        serviceTypes: [ServiceType.prepaid, ServiceType.postpaid],
      },
      {
        name: 'airtel',
        serviceTypes: [ServiceType.prepaid, ServiceType.postpaid],
      },
      {
        name: 'vodafone',
        serviceTypes: [ServiceType.prepaid, ServiceType.postpaid],
      },
      {
        name: 'aircel',
        serviceTypes: [ServiceType.prepaid],
      },
    ];
  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({});
    this.secondFormGroup = this.formBuilder.group({});
    this.thirdFormGroup = this.formBuilder.group({});
  }

  showServiceTypes(serviceName: string) {
    this.serviceTypes = this.networks.find((n) => n.name === serviceName).serviceTypes;
    console.log(this.serviceTypes);
  }

  goNext(stepper: MatStepper) {
    this.firstFormGroup.updateValueAndValidity();
    this.secondFormGroup.updateValueAndValidity();
    this.thirdFormGroup.updateValueAndValidity();
    console.log(this.firstFormGroup.invalid);
    console.log(this.secondFormGroup.invalid);
    console.log(this.thirdFormGroup.invalid);
    stepper.next();
  }

  submit() {
    this.firstFormGroup.updateValueAndValidity();
    this.secondFormGroup.updateValueAndValidity();
    this.thirdFormGroup.updateValueAndValidity();
    console.log(this.firstFormGroup.invalid);
    console.log(this.secondFormGroup.invalid);
    console.log(this.thirdFormGroup.invalid);
  }
}

interface Network {
  name: string;
  serviceTypes: ServiceType[];
}
enum ServiceType {
  postpaid = 'postpaid',
  prepaid = 'prepaid',
}
