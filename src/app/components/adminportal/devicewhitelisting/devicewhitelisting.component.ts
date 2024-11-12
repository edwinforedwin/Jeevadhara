import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { dropLists } from '../usercreation/usercreation.component'
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-devicewhitelisting',
  standalone: true,
  imports: [InputTextModule,ButtonModule,DropdownModule,FormsModule,CardModule,FileUploadModule],
  templateUrl: './devicewhitelisting.component.html',
  styleUrl: './devicewhitelisting.component.css'
})
export class DevicewhitelistingComponent {
  devices: dropLists[] = [
    {dropid:1,dropName:'Morpho'},
    {dropid:2,dropName:'Manthra'},
    {dropid:3,dropName:'Startek'}
  ]
  selectedDevice: dropLists[] = []
  serialNumber:string = ''
}
