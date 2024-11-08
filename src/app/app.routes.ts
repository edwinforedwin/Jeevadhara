import { Routes } from '@angular/router';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'jeevadhara/loanportal/userhome',component:UserhomeComponent},
    {path:'jeevadhara/loanportal/login',component:LoginComponent}
];
