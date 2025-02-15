import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-machine-modal',
  imports: [CommonModule],
  templateUrl: './register-machine-modal.component.html',
  styleUrl: './register-machine-modal.component.css'
})
export class RegisterMachineModalComponent {
  @Input() isModalOpen: boolean = false; 
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isModalOpen = false;
    this.close.emit(); 
  }

  submit() {
    this.closeModal();
  }
}
