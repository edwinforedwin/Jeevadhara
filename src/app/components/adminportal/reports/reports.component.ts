import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { dropLists} from '../usercreation/usercreation.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CardModule,DropdownModule,FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reports:dropLists[] = [
    {dropid:1,dropName:"User Status Report"},
    {dropid:2,dropName:"Whitelisting Report"}
  ]
  selectedReport:dropLists[]=[]
}
