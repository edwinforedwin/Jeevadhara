import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { dropLists } from '../usercreation/usercreation.component'
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-ruleengine',
  standalone: true,
  imports: [CardModule,InputTextModule,MultiSelectModule,FormsModule,ButtonModule,FloatLabelModule],
  templateUrl: './ruleengine.component.html',
  styleUrl: './ruleengine.component.css'
})
export class RuleengineComponent {
  rulename:string=''
  ruledescription:string=''
  rulemapping:dropLists[]=[
    {dropid:1,dropName:"Personal Loans"},
    {dropid:2,dropName:"Auto Loan"}
  ]
  selectedMapping:dropLists[]=[]
  dpddays:string=''
  activeloans:string=''
  outstandingamount:string=''
  jlgactiveloans:string=''
}
