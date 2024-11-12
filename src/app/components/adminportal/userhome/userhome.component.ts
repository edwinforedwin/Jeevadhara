import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome-Admin',
  standalone: true,
  imports: [OverlayPanelModule,MenuModule],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponentAdmin implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-home',routerLink:'dashboard'},
        { label: 'Product Configuration', icon: 'pi pi-compass',routerLink:'product'},
        { label: 'User Groups', icon: 'pi pi-users',routerLink:'usergroup'},
        { label: 'Users', icon: 'pi pi-user',routerLink:'usercreation'},
        { label: 'Business Rule Engine', icon: 'pi pi-cog' },
        { label: 'Device Whitelisting', icon: 'pi pi-mobile',routerLink:'devicewhitelisting' },
        { label: 'Reports', icon: 'pi pi-book',routerLink:'reports' }
    ];
}
}
