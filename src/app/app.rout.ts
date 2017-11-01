import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ProfileChangeComponent} from './profile-change/profile-change.component';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'signup', component: SignupComponent },
    {path: 'login-email', component: EmailComponent },
    // components that need authentication. A logged in user
    {path: 'profile',component: ProfileComponent, canActivate:[AuthGuard] },
    {path: 'profile-change', component: ProfileChangeComponent, canActivate:[AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
