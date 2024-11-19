import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import secret from '../configs/secrets.json'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  getMenus():Observable<any>{
    return this.http.get('http://localhost:234/jeevadhara/api/v1/getmenus',{headers:{'auth_value':secret.auth_value}})
  }
  createMenus(ug_name:string,ug_desc:string,ug_dashboard:string,ug_portal:string,ug_menus:string,ug_created_by:number):Observable<any>{
    let payload = {
      "ug_name":ug_name,
      "ug_desc":ug_desc,
      "ug_dashboard":ug_dashboard,
      "ug_portal":ug_portal,
      "ug_menus":ug_menus,
      "ug_created_by":ug_created_by
  }
    return this.http.post('http://localhost:234/jeevadhara/api/v1/createusergroup',payload,{headers:{'auth_value':secret.auth_value}})
  }
}
