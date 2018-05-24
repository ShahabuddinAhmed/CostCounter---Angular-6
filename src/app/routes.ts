import { UserInfoComponent } from './user-info/user-info.component';
import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from "./user-register/user-register.component";

export const appRoutes: Routes = [
    { path: 'login', component: UserloginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'user', component: UserInfoComponent }
];