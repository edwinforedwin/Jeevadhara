import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ServiceService } from '../../../services/adminportal/service.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common'

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
  imports: [InputTextModule,FormsModule,CardModule,DropdownModule,FieldsetModule,CheckboxModule,ButtonModule,FloatLabelModule,CommonModule],
  templateUrl: './usergroup.component.html',
  styleUrl: './usergroup.component.css'
})
export class UsergroupComponent {
  name: string = ''
  description: string = ''
  dashboards: dropLists[] = [
    {dropid:1,dropname:'Main Dashboard'},
    {dropid:2,dropname:'Admin Dashboard'}
  ]
  selectedDashboard: dropLists[] = []
  portalList: dropLists[] = [
    {dropid:1,dropname:"Sourcing Portal"},
    {dropid:2,dropname:"Loan Portal"},
    {dropid:3,dropname:"Admin Portal"}
  ]

  //constructor(public services:ServiceService) {}
  public ugservice = inject(ServiceService)
  public menus = this.ugservice.getMenus().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      dropid:item.menu_id,dropname:item.menu_name
    }))
  }))
  
  // getMenuList() {
  //   let apiResp = this.ugservice.getMenus()
  //   apiResp.subscribe((resp:any)=>{
  //     this.menuList = resp
  //     if (this.menuList.response === 'success') {
  //       let apiresponse = JSON.stringify(this.menuList)
  //       let apiresponsefinal = JSON.parse(apiresponse)
  //       for (let index = 0; index < apiresponsefinal.ug_details.length; index++) {
  //         const element = apiresponsefinal.ug_details[index];
  //         let menuitem:dropLists = {dropid:element.menu_id,dropname:element.menu_name}
  //         this.menuValues.push(menuitem)
  //       }
  //     }
  //   })
  // }

}
