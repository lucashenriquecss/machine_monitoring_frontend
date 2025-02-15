import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-operators-modal',
  imports: [CommonModule],
  templateUrl: './register-operators-modal.component.html',
  styleUrl: './register-operators-modal.component.css'
})
export class RegisterOperatorsModalComponent {
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
