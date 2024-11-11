import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

interface dropLists {
  dropid: number,
  dropname: string
}

@Component({
  selector: 'app-usergroup',
  standalone: true,
  imports: [InputTextModule,FormsModule,CardModule,DropdownModule,FieldsetModule,CheckboxModule,ButtonModule],
  templateUrl: './usergroup.component.html',
  styleUrl: './usergroup.component.css'
})
export class UsergroupComponent {
  name: string = ''
  description: string = ''
  dashboards: dropLists[] = [
    {dropid:1,dropname:'Main Dashboard'},
    {dropid:2,dropname:'Admin Dashboard'}
  ]
  selectedDashboard: dropLists[] = []
  menuList: dropLists[] = [
    {dropid:1,dropname:"User Creation"},
    {dropid:2,dropname:"User Modification"},
    {dropid:3,dropname:"Reports"},
    {dropid:4,dropname:"BRE Configuration"},
    {dropid:5,dropname:"Product Management"},
    {dropid:6,dropname:"Device Whitelisting"}
  ]
  portalList: dropLists[] = [
    {dropid:1,dropname:"Sourcing Portal"},
    {dropid:2,dropname:"Loan Portal"},
    {dropid:3,dropname:"Admin Portal"}
  ]
}
