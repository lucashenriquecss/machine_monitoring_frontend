import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machines',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent {
  isToggleSimulation = false;

  machines = [{
    id:"a44a44a4556",
    name: "NMM255F",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "offline",
    date: "23/04/18",
    operator: {
      name: "Jo2n Michael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255F",id:"a44a44a4555",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "offline",
    date: "23/04/18",
    operator: {
      name: "John Michael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255FA",id:"a44a44a4555",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "maintence",
    date: "23/04/18",
    operator: {
      name: "John MicFhael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255FH",id:"a44a44a4555",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "online",
    date: "23/04/18",
    operator: {
      name: "JohDn Michael",
      email: "testegmail.com"
    }
  },
  ]
  constructor(
    private router: Router
  ) { }
  toggleSimulator() {
    this.isToggleSimulation = !this.isToggleSimulation;
  }
  viewDetails(machineId: string): void {
    this.router.navigate(['/machine', machineId]);
  }

}
