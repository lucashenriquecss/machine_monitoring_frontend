import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as L from 'leaflet';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapModalComponent } from '../../components/map-modal/map-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface Machine {
  id: string;
  name: string;
  location: string;
  status: string;
  latitude: string;
  longitude: string;
  logs: any,
  createdAt: string;
  updatedAt: string;
}
@Component({
  selector: 'app-machine',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule, MatGridListModule],
  standalone: true,
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent implements OnInit {
  machine: Machine | null = null;
  machineLogs: any[] = [];
  displayedColumns: string[] = ['status', 'location', 'latitude', 'longitude', 'date'];

  private map!: L.Map;
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const machineId = this.route.snapshot.paramMap.get('id');
    if (machineId) {
      this.getMachineDetails(machineId);
    }
  }
  private initMap(latitude: number, longitude: number): void {
    this.map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([latitude, longitude]).addTo(this.map);
  }
  goBack(): void {
    this.router.navigate(['/home']);
  }

  getMachineDetails(id: string): void {
    this.apiService.get(`machine/${id}`).subscribe({
      next: (response: any) => {
        if (response?.data) {
          this.machine = response.data;
          this.machineLogs = response.data.logs
          this.initMap(response.data.latitude, response.data.longitude);
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar detalhes.');
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
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'operating':
        return 'status-operating';
      case 'offline':
        return 'status-offline';
      case 'maintenance':
        return 'status-maintenance';
      default:
        return '';
    }
  }
}