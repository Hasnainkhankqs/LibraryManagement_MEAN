/* "Barrel" of Http Interceptors */
// to learn more about http interceptors use these links
// https://github.com/SwapnilPakolu/Interceptors/tree/master/src/app
// https://medium.com/angular-in-depth/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyHttpInterceptor } from './basicInterceptor';

import { HttpErrorInterceptor } from "./errorhandling";


/** Http interceptor providers in outside-in order */

//here we will add all interceptors

export const httpInterceptorProviders = [

  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor , multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor , multi: true },

];