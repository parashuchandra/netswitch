import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RouteReusableStrategy } from './strategy/route-reusable-strategy';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule, NgbModule, I18nModule, CoreRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
  declarations: [CoreComponent, HeaderComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
