import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as L from 'leaflet';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-map-modal',
  imports: [MatButtonModule,MatDialogModule ,MatIconModule ,MatTooltipModule  ],
  templateUrl: './map-modal.component.html',
  styleUrl: './map-modal.component.css'
})
export class MapModalComponent {
  private map!: L.Map;
  
  constructor(
    public dialogRef: MatDialogRef<MapModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lat: number; lng: number }
  ) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.data.lat, this.data.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.data.lat, this.data.lng]).addTo(this.map);
  }

  close(): void {
    this.dialogRef.close();
  }
}
