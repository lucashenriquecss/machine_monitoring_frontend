import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnChanges {
  @Input() machines: {
    id: string,
    name: string,
    serie: string,
    location: string,
    latitude: number,
    longitude: number,
    status: string,
    date: string,
    operator: {
      name: string,
      email: string
    }
  }[] = [];

  private map !: L.Map;
  private marks: L.LayerGroup = L.layerGroup();

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['machines']) {
      this.updateMap();
    }
  }

  initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(this.map);

    this.marks.addTo(this.map);
  }

  updateMap(): void {
    this.marks.clearLayers();

    this.machines.forEach((obj) => {
      const points = L.marker([obj.latitude, obj.longitude]).bindPopup(`Latitude: ${obj.latitude}, Longitude: ${obj.longitude}`);
      this.marks.addLayer(points);
    });

    if (this.machines.length > 0) {
      const bounds = L.latLngBounds(this.machines.map((obj) => [obj.latitude, obj.longitude]));
      this.map.fitBounds(bounds);
    }
  }
}
