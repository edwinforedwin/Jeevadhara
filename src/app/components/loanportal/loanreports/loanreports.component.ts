import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { dropLists } from '../../adminportal/usercreation/usercreation.component'
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loanreports',
  standalone: true,
  imports: [CardModule,DropdownModule,FloatLabelModule,FormsModule],
  templateUrl: './loanreports.component.html',
  styleUrl: './loanreports.component.css'
})
export class LoanreportsComponent {
  reports:dropLists[]=[
    {dropid:1,dropName:"Sanction Report"},
    {dropid:2,dropName:"QC Report"}
  ]
  selectedreport:dropLists[]=[]
}
