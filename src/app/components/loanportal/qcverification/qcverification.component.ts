import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { dropLists } from '../../adminportal/usercreation/usercreation.component'
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qcverification',
  standalone: true,
  imports: [CardModule,DropdownModule,FloatLabelModule,ButtonModule,FormsModule],
  templateUrl: './qcverification.component.html',
  styleUrl: './qcverification.component.css'
})
export class QcverificationComponent {

  bcentities:dropLists[]=[
    {dropid:1,dropName:'SIF Access'},
    {dropid:2,dropName:'Atyati Technologies'},
    {dropid:3,dropName:'Saggraha Finserv'}
  ]
  selectedbc:dropLists[]=[]
  bcbranches:dropLists[]=[
    {dropid:1,dropName:'Aluva'},
    {dropid:2,dropName:'Kunnamkulam'}
  ]
  selectedbranch:dropLists[]=[]
  applications:dropLists[]=[
    {dropid:18791411,dropName:'Sebi Joseph'},
    {dropid:28745148,dropName:'Aiswariya R'},
    {dropid:18941811,dropName:'Akhila A S'}
  ]
}
