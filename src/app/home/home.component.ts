import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  username = 'John Doe';

  ngOnInit() {
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition((pos) => {
        console.log({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      })
    }
  }

}
