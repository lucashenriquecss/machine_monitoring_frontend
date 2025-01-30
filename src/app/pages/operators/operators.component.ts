import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  constructor(
    private router: Router
  ) { }

  viewDetails(machineId: string): void {
    this.router.navigate(['/profile', machineId]);
  }
}
