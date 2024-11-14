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
    let apiResp = this.http.get('http://localhost:234/jeevadhara/api/v1/getmenus',{headers:{'auth_value':secret.auth_value}})
    return apiResp
  }
}
