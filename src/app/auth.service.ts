import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AngularFireAuth, private router: Router){}

    canActivate(): Observable<boolean> {
        return Observable.from(this.auth.authState)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
        if
            (!authenticated) this.router.navigate([ '/login' ]);
         })
    }
    // auth0 = new auth.WebAuth({
    //     // ...
    //     scope: 'openid profile'
    //   });

    //   userProfile: any;
      
    //   //...
    //   public getProfile(cb): void {
    //     const accessToken = localStorage.getItem('access_token');
    //     if (!accessToken) {
    //       throw new Error('Access token must exist to fetch profile');
    //     }
      
    //     const self = this;
    //     this.auth.client.userInfo(accessToken, (err, profile) => {
    //       if (profile) {
    //         self.userProfile = profile;
    //       }
    //       cb(err, profile);
    //     });
    //   }
      
}




