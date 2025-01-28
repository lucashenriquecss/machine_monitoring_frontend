import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile = {
    name: "Josh tomposon",
    cargo:"CO",
    email: "sssssgmail.com",
    phone: "55888888888",
    location: "Brasil",

  }
}
