import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
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
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit  {
  @Input() machines: Machine[] = []; 
  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(this.map);

    this.machines.forEach(machine => {
      if (machine.latitude && machine.longitude) {
        L.marker([machine.latitude, machine.longitude])
          .bindPopup(`<b>${machine.name}</b><br>${machine.location}`)
          .addTo(this.map);
      }
    });
  }
}
