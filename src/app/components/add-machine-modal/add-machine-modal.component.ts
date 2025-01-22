import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-machine-modal',
  imports: [MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule],
  templateUrl: './add-machine-modal.component.html',
  styleUrl: './add-machine-modal.component.css'
})
export class AddMachineModalComponent {
  machineForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddMachineModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.machineForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      latitude: [null, [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: [null, [Validators.required, Validators.min(-180), Validators.max(180)]],
    });
  }

  submit(): void {
    if (this.machineForm.valid) {
      this.dialogRef.close(this.machineForm.value);
    }
  }
}
