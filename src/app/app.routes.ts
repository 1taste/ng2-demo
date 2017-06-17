import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from "./system/user/user.component";

export const rootRouterConfig: Routes = [
  {path: '', component: AppComponent},
  {path: 'system/user', component: UserComponent}
]
