import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterOperatorsModalComponent } from '../../components/register-operators-modal/register-operators-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operators',
  imports: [CommonModule, RegisterOperatorsModalComponent ],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  isModalOpen: boolean = false;

  constructor(
    private router: Router
  ) { }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  viewDetails(machineId: string): void {
    this.router.navigate(['/profile', machineId]);
  }
}
