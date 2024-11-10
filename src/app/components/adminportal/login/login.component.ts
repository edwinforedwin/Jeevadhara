import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-Admin',
  standalone: true,
  imports: [FormsModule,ButtonModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponentAdmin implements OnInit {
  username: string = '';
  securic: string = '';
  ngOnInit() {
    let usernameSubmitted = this.username;
    let securicSubmitted = this.securic;
  }
}
