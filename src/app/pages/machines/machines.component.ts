import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { MapComponent } from '../../components/map/map.component';
import { RegisterMachineModalComponent } from '../../components/register-machine-modal/register-machine-modal.component';
interface Machine {
  id: string;
  name: string;
  serie?: string; // Propriedade opcional
  location: string;
  latitude: number;
  longitude: number;
  status: string;
  date: string;
  operator: {
    name: string;
    email: string;
  };
}
@Component({
  selector: 'app-machines',
  imports: [CommonModule, ReactiveFormsModule, MapComponent,RegisterMachineModalComponent],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent {
  isModalOpen : boolean  = false;
  isToggleSimulation = false;

  machines: Machine[] = [
    {
      id: "a44a44a4556",
      name: "NMM255F",
      serie: "5555662144562",
      location: "Deposito B",
      latitude: -9.624101148891034,
      longitude: -35.75283875880391,
      status: "offline",
      date: "23/04/18",
      operator: {
        name: "Jo2n Michael",
        email: "testegmail.com"
      }
    },
    {
      id: "a44a44a4556",
      name: "NMM255F",
      serie: "5555662144562",
      location: "Deposito B",
      latitude: -9.624101148891034,
      longitude: -35.75283875880391,
      status: "offline",
      date: "23/04/18",
      operator: {
        name: "Jo2n Michael",
        email: "testegmail.com"
      }
    },
    {
      id: "a44a44a4556",
      name: "NMM255F",
      serie: "5555662144562",
      location: "Deposito B",
      latitude: -9.624101148891034,
      longitude: -35.75283875880391,
      status: "offline",
      date: "23/04/18",
      operator: {
        name: "Jo2n Michael",
        email: "testegmail.com"
      }
    },
    {
      name: "NMM255F", id: "a44a44a4555",
      serie: "5555662144562",
      location: "Deposito B",
      latitude: -9.650263253998798,
      longitude: -35.733421146970045,
      status: "offline",
      date: "23/04/18",
      operator: {
        name: "John Michael",
        email: "testegmail.com"
      }
    },

  ]
  constructor(
    private router: Router
  ) { }


  openModal() {
    this.isModalOpen = true; 
  }
  closeModal() {
    this.isModalOpen = false;
  }
  toggleSimulator() {
    this.isToggleSimulation = !this.isToggleSimulation;
  }
  viewDetails(machineId: string): void {
    this.router.navigate(['/machine', machineId]);
  }

}
