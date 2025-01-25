import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-modal',
  imports: [MatDialogModule],
  templateUrl: './map-modal.component.html',
  styleUrl: './map-modal.component.css'
})
export class MapModalComponent  implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: { latitude: number; longitude: number }) {}

  ngOnInit(): void {
    const map = L.map('map').setView([this.data.latitude, this.data.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.marker([this.data.latitude, this.data.longitude]).addTo(map)
      .bindPopup('Localização selecionada')
      .openPopup();
  }
}
