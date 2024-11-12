import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { dropLists } from '../usercreation/usercreation.component'
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonModule,DropdownModule,CardModule,InputTextModule,FormsModule,FloatLabelModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  name:string=''
  description:string=''
  schemecode:string=''
  subheadcode=''
  inttablecode=''
  minloanamount=''
  maxloanamount=''
  mininterest=''
  maxinterest=''
  mintenure=''
  maxtenure=''
  mapping:dropLists[]=[
    {dropid:1,dropName:"SIF Access"},
    {dropid:2,dropName:"Saggraha"}
  ]
  selectedMapping:dropLists[]=[]
}
