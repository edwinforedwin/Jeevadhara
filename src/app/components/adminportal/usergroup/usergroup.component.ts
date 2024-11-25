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
interface usergroups {
  usergroup_id:number,
  usergroup_name:string,
  usergroup_description:string,
  usergroup_dashboard:string,
  usergroup_portal:string,
  usergroup_menus:string
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
  viewVal:number=0
  usergroupslist:usergroups[]=[]


  public ugservice = inject(ServiceService)
  public messageservice = inject(MessageService)

  public menus = this.ugservice.getMenus().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      dropid:item.menu_id,dropname:item.menu_name
    }))
  }))

  public usergroupvalues = this.ugservice.getUsergroups().pipe(map((resp:any)=>{
    return resp.ug_details.map((item:any)=>({
      usergroup_id:item.usergroup_id,usergroup_name:item.usergroup_name,usergroup_description:item.usergroup_description,usergroup_dashboard:item.usergroup_dashboard,usergroup_portal:item.usergroup_portal,usergroup_menus:item.usergroup_menus
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
  getusergroups() {
    let response = this.ugservice.getUsergroups()
    response.subscribe((resp:any)=>{
      this.apiresponse = resp
      if(this.apiresponse.response === 'success') {
        let apiresponsevalue = JSON.stringify(this.apiresponse)
        let apiresponsefinal = JSON.parse(apiresponsevalue)
        for (let index = 0; index < apiresponsefinal.length; index++) {
          const element = apiresponsefinal[index];
          let usergroups:usergroups = {usergroup_id:element.usergroup_id,usergroup_name:element.usergroup_name,usergroup_description:element.usergroup_description,usergroup_dashboard:element.usergroup_dashboard,usergroup_portal:element.usergroup_portal,usergroup_menus:element.usergroup_menus}
          this.usergroupslist.push(usergroups)
        }
      }
    })
  }
}
