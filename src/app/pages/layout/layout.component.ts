import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,SidebarComponent,NavbarComponent], 
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) { }
}
