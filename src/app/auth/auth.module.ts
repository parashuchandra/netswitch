import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@app/i18n';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AuthRoutingModule } from './auth-routing.module';
import { GenerateOtpComponent } from './generate-otp/generate-otp.component';
import { LoginComponent } from './login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, I18nModule, AuthRoutingModule],
  declarations: [LoginComponent, GenerateOtpComponent, VerifyOtpComponent],
})
export class AuthModule {}
