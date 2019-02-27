import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,

    // UIRouterModule.forRoot({
    //   states: APP_STATES,
    //   useHash: false,
    //   otherwise: { state: 'home' },
    //   // config: routerConfigFn,
    // }),
    BrowserAnimationsModule
  ],
  // providers: [
  //   { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
