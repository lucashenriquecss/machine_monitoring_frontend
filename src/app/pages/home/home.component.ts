import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.services';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddMachineModalComponent } from '../../components/add-machine-modal/add-machine-modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface MachineData {
  id: string;
  name: string;
  location: string;
  status: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-home',
  imports: [MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,MatTooltipModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status','location','latitude','longitude', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  statusFilter = new FormControl('');

  constructor(private dialog: MatDialog,private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadMachines();
  }

  loadMachines(): void {
    this.apiService.get('machine').subscribe({
      next: (response: any) => {
        if (response?.data) {
          this.dataSource.data = response.data;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar dados.');
      }
    });
  }

  applyFilter(): void {
    const filterValue = (this.statusFilter.value ?? '').trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  viewDetails(machineId: string): void {
    this.router.navigate(['/machine', machineId]);
  }
  addMachine(machineData: any): void {
    this.apiService.post('machine', machineData).subscribe({
      next: (response) => {
        alert('Máquina adicionada com sucesso!');
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao adicionar a máquina.');
      }
    });
  }
  openAddMachineModal(): void {
    const dialogRef = this.dialog.open(AddMachineModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addMachine(result);
      }
    });
  }
}
