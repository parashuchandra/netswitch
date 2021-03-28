import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/@core/@services/authentication.service';
import { Logger } from '@app/@core/@services/logger.service';
import { finalize } from 'rxjs/operators';

const log = new Logger('Verify OTP');

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  headerMessage: string;
  phonenumber: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.route.queryParams.subscribe((params) => {
      this.phonenumber = params.phonenumber;
      console.log(this.phonenumber);
    });
  }

  ngOnInit() {
    this.headerMessage = `OTP has been successfully sent to your mobile.
Please enter the same OTP below`;
  }

  login() {
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
          this.router.navigate(['/home'], { relativeTo: this.route });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }
}
