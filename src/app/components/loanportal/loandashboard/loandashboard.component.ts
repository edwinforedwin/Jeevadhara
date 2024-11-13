import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-loandashboard',
  standalone: true,
  imports: [CardModule],
  templateUrl: './loandashboard.component.html',
  styleUrl: './loandashboard.component.css'
})
export class LoandashboardComponent {

}
