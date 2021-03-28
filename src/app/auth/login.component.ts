import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/@core/@services/authentication.service';
import { Logger } from '@core/@services/logger.service';
import { environment } from '@env/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs/operators';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  otpGenerated = false;
  version: string | null = environment.version;
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
    console.log(12345);
    this.isLoading = false;
    this.otpGenerated = true;
    this.loginForm.addControl(
      'otp',
      new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(6)])
    );
  }

  submit() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(
        (credentials) => {
          log.debug(`${credentials.phonenumber} successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
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
