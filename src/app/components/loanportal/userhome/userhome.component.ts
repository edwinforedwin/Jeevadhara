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
            { label: 'Home', icon: 'pi pi-home' },
            { label: 'KYC Verification', icon: 'pi pi-search'},
            { label: 'Data Updation', icon: 'pi pi-pencil'},
            { label: 'Sanction', icon: 'pi pi-check-square' },
            { label: 'Reports', icon: 'pi pi-book' }

        ];
    }
}
