import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ServiceService } from '../../../services/adminportal/service.service';

interface dropLists {
  dropid: number,
  dropname: string
}
interface apiResponse {
  response: string,
  response_code: string,
  menu_details: []
}

@Component({
  selector: 'app-usergroup',
  standalone: true,
  imports: [InputTextModule,FormsModule,CardModule,DropdownModule,FieldsetModule,CheckboxModule,ButtonModule,FloatLabelModule],
  templateUrl: './usergroup.component.html',
  styleUrl: './usergroup.component.css'
})
export class UsergroupComponent implements OnInit {
  name: string = ''
  description: string = ''
  dashboards: dropLists[] = [
    {dropid:1,dropname:'Main Dashboard'},
    {dropid:2,dropname:'Admin Dashboard'}
  ]
  selectedDashboard: dropLists[] = []
  menuList: apiResponse = {response:'',response_code:'',menu_details:[]}
  menuValues:dropLists[]=[]
  portalList: dropLists[] = [
    {dropid:1,dropname:"Sourcing Portal"},
    {dropid:2,dropname:"Loan Portal"},
    {dropid:3,dropname:"Admin Portal"}
  ]

  constructor(private services:ServiceService) {}

  ngOnInit(){
    let apiResp = this.services.getMenus()
    apiResp.subscribe((resp:any)=>{
      this.menuList = resp
      if (this.menuList.response === 'success') {
        for (let index = 0; index < this.menuList.menu_details.length; index++) {
          const element = JSON.parse(this.menuList.menu_details[index])
          this.menuValues.push({dropid:element.menu_id,dropname:element.menu_name})
        }
      }
    })
    console.log(this.menuValues)
  }
}
