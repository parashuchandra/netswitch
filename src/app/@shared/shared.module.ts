import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ErrorPopupComponent],
  exports: [LoaderComponent, ErrorPopupComponent],
})
export class SharedModule {}
