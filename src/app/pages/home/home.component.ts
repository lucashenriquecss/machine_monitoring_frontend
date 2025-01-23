import {Component, OnInit, OnDestroy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.services';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddMachineModalComponent } from '../../components/add-machine-modal/add-machine-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MapModalComponent } from '../../components/map-modal/map-modal.component';
import { SocketService } from '../../services/socket.services';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [ApiService, SocketService],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'status', 'location', 'latitude', 'longitude', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  statusFilter = new FormControl('');
  private socketSubscription!: Subscription;

  constructor(
    private socketService: SocketService,
    private dialog: MatDialog,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeWebSocket();
    this.loadMachines();
  }
  ngOnDestroy(): void {
    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }
    this.socketService.disconnect();
  }

  private initializeWebSocket(): void {
    this.socketService.connect();

    this.socketSubscription = this.socketService.onTelemetryBroadcast().subscribe(
      (updatedMachine: any) => {
        this.updateMachineData(updatedMachine);
      }
    );

    this.dataSource.data.forEach(machine => {
      const machineSubscription = this.socketService.monitorMachine(machine.id).subscribe(
        (machineData: any) => {
          this.updateMachineData(machineData);
        }
      );
    });
  }

  private updateMachineData(updatedMachine: any): void {

    const index = this.dataSource.data.findIndex(machine => machine.id === updatedMachine.machineId);

    if (index !== -1) {
      const updatedData = [...this.dataSource.data];
      updatedData[index] = {
        ...updatedData[index],
        status: updatedMachine.status,
        location: updatedMachine.location,
        latitude: updatedMachine.latitude,
        longitude: updatedMachine.longitude,
        // playSimulator: updatedMachine.status === 'operating' ? true : false
      };
      this.dataSource.data = updatedData;
    }
  }


  loadMachines(): void {
    this.apiService.get('machine').subscribe({
      next: (response: any) => {
        if (response?.data) {
          this.dataSource.data = response.data;
          this.dataSource.data.forEach(machine => {
            this.socketService.monitorMachine(machine.id);
          });
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar dados.');
      }
    });
  }

  togglePlayStop(element: any): void {
    if (element.playSimulator) {
      element.playSimulator = false;
      this.apiService.delete(`simulator/${element.id}`).subscribe({
        next: (response: any) => {
          alert("Simulador parado");
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao fazer login. Verifique as credenciais.');
        }
      });
    } else {
      element.playSimulator = true;
      this.apiService.post(`simulator/${element.id}`, {
        "location": element.location,
        "latitude": element.latitude,
        "longitude": element.longitude
      }).subscribe({
        next: (response: any) => {
          alert("Simulador iniciado");
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao fazer login. Verifique as credenciais.');
        }
      });

    }
  }
  applyFilter(): void {
    const filterValue = (this.statusFilter.value ?? '').trim().toLowerCase();
    this.dataSource.filter = filterValue;
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
  openMap(latitude: number, longitude: number) {
    this.dialog.open(MapModalComponent, {
      width: '600px',
      data: {
        lat: latitude,
        lng: longitude
      }
    });
  }



  viewDetails(machineId: string): void {
    this.router.navigate(['/machine', machineId]);
  }
  addMachine(machineData: any): void {
    this.apiService.post('machine', machineData).subscribe({
      next: (response) => {
        alert('Máquina adicionada com sucesso!');
        this.ngOnInit()
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao adicionar a máquina.');
      }
    });
  }

  deleteMachine(machineId: string): void {
    this.apiService.delete(`machine/${machineId}`).subscribe({
      next: (response) => {
        alert('Máquina Deletada com sucesso!');
        this.ngOnInit()
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao adicionar a máquina.');
      }
    });
  }
 
}
