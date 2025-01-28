import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

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
    description: "Hi, Im Alec Thompson, Decisions: If you cant decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality.",
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

    L.marker([latitude, longitude]).addTo(this.map);
  }

  onEdit() { }
  onRemove() { }
}
