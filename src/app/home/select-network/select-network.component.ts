import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-network',
  templateUrl: './select-network.component.html',
  styleUrls: ['./select-network.component.scss'],
})
export class SelectNetworkComponent implements OnInit {
  error: string | undefined;
  networkForm!: FormGroup;
  firstFormGroup!: FormGroup;

  isLoading = false;
  networks: Network[];
  serviceTypes: ServiceType[];

  constructor(private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
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
    this.createForm();
  }

  submit() {}

  showServiceTypes(serviceName: string) {
    this.serviceTypes = this.networks.find((n) => n.name === serviceName).serviceTypes;
    console.log(this.serviceTypes);
  }

  private createForm() {
    this.firstFormGroup = this.ctrlContainer.form;

    this.networkForm = this.formBuilder.group({
      new_service: ['', Validators.required],
      new_service_type: ['', Validators.required],
    });

    this.firstFormGroup.addControl('network', this.networkForm);
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
