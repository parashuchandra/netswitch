import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot(),
    RouterModule,
    NgbModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [Keyboard, StatusBar, SplashScreen],
  bootstrap: [AppComponent],
})
export class AppModule {}
