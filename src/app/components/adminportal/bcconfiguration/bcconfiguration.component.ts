import { Component,inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { dropLists } from '../usercreation/usercreation.component'
import { DropdownModule } from 'primeng/dropdown';
import { ServiceService } from '../../../services/adminportal/service.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface stateInterface {
  statename:string,
  statecbscode:string
}

@Component({
  selector: 'app-bcconfiguration',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FloatLabelModule,FormsModule,DropdownModule,AsyncPipe],
  templateUrl: './bcconfiguration.component.html',
  styleUrl: './bcconfiguration.component.css'
})
export class BcconfigurationComponent {
  bcname:string=''
  bcaddress:string=''
  cities:dropLists[]=[
    {dropid:1,dropName:'Amakkavu'},
    {dropid:2,dropName:'Nattika'}
  ]
  selectedstate:stateInterface={statename:'',statecbscode:'03'}
  selecteddistrict:dropLists[]=[]
  selectedcity:dropLists[]=[]
  bcemail:string=''
  bcpan:string=''
  bcgst:string=''
  bcauthname:string=''
  bcauthpan:string=''
  bcauthdesignation:string=''

  public bcservice = inject(ServiceService)

  public states = this.bcservice.getStates().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      statename:item.state_name,statecbscode:item.state_cbs_code
    }))
  }))
  public districts = this.bcservice.getDistricts(this.selectedstate.statecbscode).pipe(map((resp:any)=>{
    return resp.districts_details.map((item:any)=>({
      districtname:item.district_name,districtcbscode:item.district_cbs_code
    }))
  }))
}
