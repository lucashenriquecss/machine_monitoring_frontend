import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-machines',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent implements OnInit {
  private map!: L.Map;

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

  ngOnInit(): void {
    this.initMap()
  }

  private initMap(): void {
    this.map = L.map('map').setView([-9.624101148891034, -35.75283875880391], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

  //   L.Routing.control({
  //     router: L.Routing.osrmv1({
  //         serviceUrl: `http://router.project-osrm.org/route/v1/`
  //     }),
  //     showAlternatives: true,
    
  //     // lineOptions: {styles: [{color: '#242c81', weight: 7}]},
  //     fitSelectedRoutes: false,
  //     // altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
  //     show: false,
  //     routeWhileDragging: true,
  //     waypoints: [
  //         L.latLng(-9.624101148891034, -35.75283875880391),
  //         L.latLng(-9.624101148891034, -35.75283875880391),
  //         L.latLng(-9.650263253998798, -35.733421146970045)
  //     ]
  // }).addTo(this.map);
    L.marker([-9.624101148891034, -35.75283875880391]).addTo(this.map);
    L.marker([-9.650263253998798, -35.733421146970045]).addTo(this.map);

  }

  toggleSimulator() {
    this.isToggleSimulation = !this.isToggleSimulation;
  }
  viewDetails(machineId: string): void {
    this.router.navigate(['/machine', machineId]);
  }

}
