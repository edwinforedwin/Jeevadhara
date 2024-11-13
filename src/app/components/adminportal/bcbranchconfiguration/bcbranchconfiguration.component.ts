import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { dropLists } from '../usercreation/usercreation.component'

@Component({
  selector: 'app-bcbranchconfiguration',
  standalone: true,
  imports: [CardModule,ButtonModule,InputTextModule,DropdownModule,FloatLabelModule,FormsModule],
  templateUrl: './bcbranchconfiguration.component.html',
  styleUrl: './bcbranchconfiguration.component.css'
})
export class BcbranchconfigurationComponent {
  bcbranchname:string=''
  bcbranchaddress:string=''
  bclist:dropLists[]=[
    {dropid:1,dropName:"SIF Access"},
    {dropid:2,dropName:"Saggraha"}
  ]
  selectedbc:dropLists[]=[]
  bcbranchphone:string=''
  bcbranchemail:string=''
  bcbranchlatitude:string=''
  bcbranchlongitude:string=''
  bcmanagers:dropLists[]=[
    {dropid:1,dropName:"Edwin U Kannanaikkal"},
    {dropid:2,dropName:"Sebi Joseph"}
  ]
  selectedbcmanager:dropLists[]=[]
}
