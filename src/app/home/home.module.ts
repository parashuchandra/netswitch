import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { CompleteSwitchComponent } from './complete-switch/complete-switch.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MnpComponent } from './mnp/mnp.component';
import { SelectNetworkComponent } from './select-network/select-network.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, TranslateModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, SelectNetworkComponent, MnpComponent, CompleteSwitchComponent],
})
export class HomeModule {}
