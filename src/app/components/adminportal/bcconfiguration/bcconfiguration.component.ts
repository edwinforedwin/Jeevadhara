import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DevicewhitelistingComponent } from "../devicewhitelisting/devicewhitelisting.component";
import { FormsModule } from '@angular/forms';
import { dropLists } from '../usercreation/usercreation.component'
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-bcconfiguration',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FloatLabelModule, DevicewhitelistingComponent,FormsModule,DropdownModule],
  templateUrl: './bcconfiguration.component.html',
  styleUrl: './bcconfiguration.component.css'
})
export class BcconfigurationComponent {
  bcname:string=''
  bcaddress:string=''
  states:dropLists[]=[
    {dropid:1,dropName:'Kerala'},
    {dropid:2,dropName:'Tamil Nadu'}
  ]
  districts:dropLists[]=[
    {dropid:1,dropName:'Palakkad'},
    {dropid:2,dropName:'Madurai'}
  ]
  cities:dropLists[]=[
    {dropid:1,dropName:'Amakkavu'},
    {dropid:2,dropName:'Nattika'}
  ]
  selectedstate:dropLists[]=[]
  selecteddistrict:dropLists[]=[]
  selectedcity:dropLists[]=[]
  bcemail:string=''
  bcpan:string=''
  bcgst:string=''
  bcauthname:string=''
  bcauthpan:string=''
  bcauthdesignation:string=''
}
