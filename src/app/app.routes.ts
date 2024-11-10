import { Routes } from '@angular/router';
import { UserhomeComponentLoan } from './components/loanportal/userhome/userhome.component'
import { LoginComponentLoan } from './components/loanportal/login/login.component';
import { LoginComponentAdmin } from './components/adminportal/login/login.component'
import { UserhomeComponentAdmin } from './components/adminportal/userhome/userhome.component';
import { UsercreationComponent } from './components/adminportal/usercreation/usercreation.component';
import { AdmindashboardComponent } from './components/adminportal/admindashboard/admindashboard.component';

export const routes: Routes = [
    {path:'jeevadhara/loanportal/login',component:LoginComponentLoan},
    {path:'jeevadhara/loanportal/userhome',component:UserhomeComponentLoan},
    {path:'jeevadhara/adminportal/login',component:LoginComponentAdmin},
    {path:'jeevadhara/adminportal/userhome',component:UserhomeComponentAdmin,
        children:[
            {path:'usercreation',component:UsercreationComponent},
            {path:'dashboard',component:AdmindashboardComponent}
        ]
    }
];
