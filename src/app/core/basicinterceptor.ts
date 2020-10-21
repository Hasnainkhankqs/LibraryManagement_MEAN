// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

// import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
// @Injectable()
// export class BasicInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     return next.handle(req);

//   }
// }

// https://medium.com/@arunkumarv/angular-spinner-with-http-interceptor-d829a5e84921
// https://www.npmjs.com/package/ngx-spinner

import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';



// {
//     providedIn: 'root',
//   }

@Injectable({
    providedIn: 'root'
  })


export class MyHttpInterceptor implements HttpInterceptor {
    
    count = 0;

    // constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // this.spinner.show();
        console.log("spinner is showing");
        this.count++;

        return next.handle(req)

            .pipe ( tap (

                    event => console.log(event),

                    error => console.log( error )

                ), finalize(() => {

                    this.count--;

                    if ( this.count == 0 ) {

                        // this.spinner.hide ()
                        console.log("spinner is hidding");
                    
                    }
                })
            );
    }
}