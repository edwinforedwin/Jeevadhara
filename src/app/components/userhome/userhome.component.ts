import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [
    MenuModule
  ],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home' },
            { label: 'Sanction Pending', icon: 'pi pi-search' }
        ];
    }
}
