import { Routes } from '@angular/router';
import { UserhomeComponentLoan } from './components/loanportal/userhome/userhome.component'
import { LoginComponentLoan } from './components/loanportal/login/login.component';
import { LoginComponentAdmin } from './components/adminportal/login/login.component'
import { UserhomeComponentAdmin } from './components/adminportal/userhome/userhome.component';
import { UsercreationComponent } from './components/adminportal/usercreation/usercreation.component';
import { AdmindashboardComponent } from './components/adminportal/admindashboard/admindashboard.component';
import { UsergroupComponent } from './components/adminportal/usergroup/usergroup.component';
import { DevicewhitelistingComponent } from './components/adminportal/devicewhitelisting/devicewhitelisting.component';
import { ReportsComponent } from './components/adminportal/reports/reports.component';
import { ProductComponent } from './components/adminportal/product/product.component';
import { RuleengineComponent } from './components/adminportal/ruleengine/ruleengine.component';
import { AuthpendingComponent } from './components/adminportal/authpending/authpending.component';
import { BcconfigurationComponent } from './components/adminportal/bcconfiguration/bcconfiguration.component';
import { BcbranchconfigurationComponent } from './components/adminportal/bcbranchconfiguration/bcbranchconfiguration.component';

export const routes: Routes = [
    {path:'jeevadhara/loanportal/login',component:LoginComponentLoan},
    {path:'jeevadhara/loanportal/userhome',component:UserhomeComponentLoan},
    {path:'jeevadhara/adminportal/login',component:LoginComponentAdmin},
    {path:'jeevadhara/adminportal/userhome',component:UserhomeComponentAdmin,
        children:[
            {path:'usercreation',component:UsercreationComponent},
            {path:'dashboard',component:AdmindashboardComponent},
            {path:'usergroup',component:UsergroupComponent},
            {path:'devicewhitelisting',component:DevicewhitelistingComponent},
            {path:'reports',component:ReportsComponent},
            {path:'product',component:ProductComponent},
            {path:'ruleengine',component:RuleengineComponent},
            {path:'authpending',component:AuthpendingComponent},
            {path:'bcconfiguration',component:BcconfigurationComponent},
            {path:'bcbranchconfiguration',component:BcbranchconfigurationComponent}
        ]
    }
];
