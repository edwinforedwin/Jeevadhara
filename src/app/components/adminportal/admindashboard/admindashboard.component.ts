import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { dropLists } from '../usercreation/usercreation.component'

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  pendingitems:dropLists[]=[
    {dropid:1,dropName:"Device Whitelisting"},
    {dropid:2,dropName:"BRE Configuration"},
    {dropid:3,dropName:"Product Creation"}
  ]
}
