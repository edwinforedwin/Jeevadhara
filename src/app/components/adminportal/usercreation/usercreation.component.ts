import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

interface dropLists {
  dropid: number,
  dropName: string
}

@Component({
  selector: 'app-usercreation',
  standalone: true,
  imports: [InputTextModule,FormsModule,DropdownModule,CalendarModule,CardModule],
  templateUrl: './usercreation.component.html',
  styleUrl: './usercreation.component.css'
})
export class UsercreationComponent {
  name: string = ''
  address: string = ''
  mobileno: string = ''
  portals: dropLists[] = [
    {dropid:1,dropName:"Admin Portal"},
    {dropid:2,dropName:"Loan Portal"},
    {dropid:3,dropName:"Sourcing Portal"},
  ]
  selectedPortal: dropLists[]=[]
  timeFrom: Date | undefined
  timeTo: Date | undefined
  serviceProvides: dropLists[] = [
    {dropid:1,dropName:"Saggraha"},
    {dropid:2,dropName:"SIF Access Private Limited"},
  ]
  selectedSP: dropLists[]=[]
  serviceProvidesBranches: dropLists[] = [
    {dropid:1,dropName:"Kootanad"},
    {dropid:2,dropName:"Aluva"},
  ]
  selectedSPB: dropLists[]=[]
  email: string = ''
}
