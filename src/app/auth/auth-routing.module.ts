import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { GenerateOtpComponent } from './generate-otp/generate-otp.component';
import { LoginComponent } from './login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: marker('Login') },
    children: [
      { path: '', redirectTo: 'generateotp', pathMatch: 'full' },
      { path: 'generateotp', component: GenerateOtpComponent },
      {
        path: 'verifyotp',
        component: VerifyOtpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
