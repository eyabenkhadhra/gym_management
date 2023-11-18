import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  map!: L.Map;
  defaultCenter = L.latLng(34.729121, 10.737532); // Position par défaut (San Francisco)

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView(this.defaultCenter, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }
}
