import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './core/header/header.component';

// @NgModule({
//   imports: [
//     // angular
//     BrowserAnimationsModule,
//     BrowserModule,
//
//     // core & shared
//     CoreModule,
//     // SharedModule,
//
//     // app
//     AppRoutingModule
//   ],
//   declarations: [AppComponent, HeaderComponent],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // core & shared
    CoreModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

