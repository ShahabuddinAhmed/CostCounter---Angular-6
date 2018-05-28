import { ViewCreditComponent } from './view-credit/view-credit.component';
import { ViewDebitComponent } from './view-debit/view-debit.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from "./user-register/user-register.component";

export const appRoutes: Routes = [
    // { path: '/', component: HomeComponent },
    { path: 'login', component: UserloginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'user', component: UserInfoComponent },
    { path: 'debit', component: ViewDebitComponent },
    { path: 'credit', component: ViewCreditComponent }
];