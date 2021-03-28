import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/@core/@services/authentication.service';
import { Logger } from '@app/@core/@services/logger.service';
import { finalize } from 'rxjs/operators';

const log = new Logger('Generate OTP');

@Component({
  selector: 'app-generate-otp',
  templateUrl: './generate-otp.component.html',
  styleUrls: ['./generate-otp.component.scss'],
})
export class GenerateOtpComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  generateOTP() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (credentials) => {
          log.debug(`${credentials.phonenumber} successfully logged in`);
          this.router.navigate(['../verifyotp'], {
            relativeTo: this.route,
            queryParams: { phonenumber: this.loginForm.controls.phonenumber.value },
            skipLocationChange: true,
          });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      phonenumber: ['', Validators.required],
    });
  }
}
