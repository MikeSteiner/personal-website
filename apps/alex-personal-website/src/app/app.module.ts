import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SharedModule } from '@personal-website/shared';
import { CoreModule } from '@personal-website/core';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatIconModule,
    // MatButtonModule,
    // FontAwesomeModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

