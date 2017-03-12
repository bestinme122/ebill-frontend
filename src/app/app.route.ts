import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
