import { Component,inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DevicewhitelistingComponent } from "../devicewhitelisting/devicewhitelisting.component";
import { FormsModule } from '@angular/forms';
import { dropLists } from '../usercreation/usercreation.component'
import { DropdownModule } from 'primeng/dropdown';
import { ServiceService } from '../../../services/adminportal/service.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface states{
  statename:string,
  statecbscode:string
}
interface apiresponse {
  response:string,
  err_msg:string
}

@Component({
  selector: 'app-bcconfiguration',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FloatLabelModule,FormsModule,DropdownModule,AsyncPipe],
  templateUrl: './bcconfiguration.component.html',
  styleUrl: './bcconfiguration.component.css'
})
export class BcconfigurationComponent implements OnInit {
  apiresponse:apiresponse={response:'',err_msg:''}
  bcname:string=''
  bcaddress:string=''
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

  public bcservice = inject(ServiceService)

  public stateses = this.bcservice.getStates().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      statename:item.state_name,statecbscode:item.state_cbs_code
    }))
  }))
  public states = this.bcservice.getStates().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      statename:item.state_name,statecbscode:item.state_cbs_code
    }))
  }))
  ngOnInit() {
    this.states.subscribe((resp:any)=>{
      
    })
  }
}
