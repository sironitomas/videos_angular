import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule, Inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResourceHandler } from '@ngx-resource/core';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppMocksResourceHandler } from './core/api/app-mocks-resource-handler';
import { MemoryDataService } from './core/mocks/memory-data.service';

import localeEs from "@angular/common/locales/es-419";
import localeEn from "@angular/common/locales/en";

export function appHandlerFactory(http: HttpClient) {
  return new AppMocksResourceHandler(http);
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { HttpInterceptorService } from './core/services/interceptors/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}
    ),
    ResourceModule.forRoot({
      handler: {provide: ResourceHandler, useFactory: (appHandlerFactory), deps: [HttpClient]}
    }),
    CoreModule,
    ModulesModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(@Inject(LOCALE_ID) locale: string) {
    registerLocaleData(locale === "es" ? localeEs : localeEn);
  }

}
