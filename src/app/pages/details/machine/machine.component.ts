import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-machine',
  imports: [CommonModule],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent implements OnInit {
  private map!: L.Map;

  machine = {
    name: "NMM255F",
    serie: "5555662144562",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    location: "Deposito B",
    latitude: -9.593211781283628,
    longitude: -35.75511754633586,
    status: "offline",
    date: "23/04/18",
    operator: {
      name: "John Michael",
      email: "testegmail.com"
    }
  }

  solicitations = [{
    title: "Solicitação de peças",
    date: "23/04/18 18:00"
  },
  {
    title: "Solicitação de novo operador",
    date: "23/04/18 18:00"
  }, {
    title: "Solicitação de manutenção",
    date: "23/04/18 18:00"
  }, {
    title: "Solicitação de vistoria",
    date: "23/04/18 18:00"
  },
  ]

  logs = [{
    title: "Movimentação",
    date: "23/04/18 18:00",
    latitude: -9.593211781283628,
    longitude: -35.75511754633586,
    status: "Online"
  },
  {
    title: "Movimentação",
    date: "23/04/18 18:00",
    latitude: -9.593211781283628,
    longitude: -35.75511754633586,
    status: "Online"
  }, {
    title: "Movimentação",
    date: "23/04/18 18:00",
    latitude: -9.593211781283628,
    longitude: -35.75511754633586,
    status: "Online"
  }, {
    title: "Movimentação",
    date: "23/04/18 18:00",
    latitude: -9.593211781283628,
    longitude: -35.75511754633586,
    status: "Online"
  },
  ]
  constructor() { };

  ngOnInit(): void {
    this.initMap(this.machine.latitude, this.machine.longitude)
  }

  private initMap(latitude: number, longitude: number): void {
    this.map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.Routing.control({
      router: L.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
    
      // lineOptions: {styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: false,
      // altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
      show: false,
      routeWhileDragging: true,
      waypoints: [
          L.latLng(latitude, longitude),
      ]
  }).addTo(this.map);
    // L.marker([latitude, longitude]).addTo(this.map);
  }


  
  onEdit() { }
  onRemove() { }
}
