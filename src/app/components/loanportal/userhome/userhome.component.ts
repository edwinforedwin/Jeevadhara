import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-userhome-Loan',
  standalone: true,
  imports: [
    MenuModule, OverlayPanelModule
  ],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponentLoan implements OnInit {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home',routerLink:'dashboard' },
            { label: 'QC Verification', icon: 'pi pi-search',routerLink:'qcverification'  },
            { label: 'Loan Sanction', icon: 'pi pi-check-square',routerLink:'loansanction' },
            { label: 'eSign Execution', icon: 'pi pi-pen-to-square',routerLink:'esignexecution' },
            { label: 'Customer Data Updation', icon: 'pi pi-pencil',routerLink:'customerdataupdation' },
            { label: 'Reports', icon: 'pi pi-book',routerLink:'reports' }

        ];
    }
}
