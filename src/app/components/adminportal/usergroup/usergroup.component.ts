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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

interface dropLists {
  dropid: number,
  dropname: string
}
interface apiresponse {
  response:string,
  err_msg:string
}

@Component({
  selector: 'app-usergroup',
  standalone: true,
  imports: [
    InputTextModule,FormsModule,CardModule,DropdownModule,FieldsetModule,CheckboxModule,ButtonModule,
    FloatLabelModule,CommonModule,ToastModule,RippleModule],
  templateUrl: './usergroup.component.html',
  styleUrl: './usergroup.component.css',
  providers:[MessageService]
})
export class UsergroupComponent {
  name: string = ''
  description: string = ''
  dashboards: dropLists[] = [
    {dropid:1,dropname:'Main Dashboard'},
    {dropid:2,dropname:'Admin Dashboard'}
  ]
  selectedDashboard: dropLists = {dropid:0,dropname:''}
  portalList: dropLists[] = [
    {dropid:1,dropname:"Sourcing Portal"},
    {dropid:2,dropname:"Loan Portal"},
    {dropid:3,dropname:"Admin Portal"}
  ]
  apiresponse:apiresponse={response:'',err_msg:''}
  checkedportals:string[]=[]
  checkedmenus:string[]=[]

  public ugservice = inject(ServiceService)
  public messageservice = inject(MessageService)

  public menus = this.ugservice.getMenus().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      dropid:item.menu_id,dropname:item.menu_name
    }))
  }))

  createusergroup(){
    if (this.name==='' || this.description==='' || this.checkedportals.length===0 || this.checkedmenus.length === 0 || this.selectedDashboard.dropname==='') {
      this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Enter values in required fields' })
    }
    else {
      let response = this.ugservice.createMenus(this.name,this.description,this.selectedDashboard.dropname,this.checkedportals,this.checkedmenus,1)
      response.subscribe((resp:any)=>{
        this.apiresponse = resp
        if (this.apiresponse.response === 'success') {
          this.messageservice.add({ severity: 'success', summary: this.name, detail: 'User group created successfully' })
          this.name = ''
          this.description = ''
          this.checkedmenus = []
          this.checkedportals = []
          this.selectedDashboard={dropid:0,dropname:''}
        }
        else {
          this.messageservice.add({ severity: 'error', summary: this.apiresponse.err_msg, detail: 'Message Content' })
        }
      })
    }
  }
  
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
