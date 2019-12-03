import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare const google;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loader: MapsAPILoader) { }
  
  theClubPolygon;
  username = 'Admin';
  message = '';
  showAlert = false;
  showLocationUpdate = false;
  zoom = 15;
  // Center of the Club, where the initial marker will be placed
  center = {
    lat: 6.435838,
    lng: 3.451384,
  };
  // This array of latitude-longitudes represents the polygon around our ranch
  polygon = [
    { lat: 6.436914, lng: 3.451432 },
    { lat: 6.436019, lng: 3.450917 },
    { lat: 6.436584, lng: 3.450917 },
    { lat: 6.435006, lng: 3.450928 },
    { lat: 6.434953, lng: 3.451808 },
    { lat: 6.435251, lng: 3.451765 },
    { lat: 6.435262, lng: 3.451969 },
    { lat: 6.435518, lng: 3.451958 },
  ];

  ngOnInit() {
    this.loader.load().then(() => {
      this.theClubPolygon = new google.maps.Polygon({paths: this.polygon});
    });
  }

}
