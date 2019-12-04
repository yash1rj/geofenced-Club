import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  username = 'John Doe';

  pingServer(location) {
    console.log("POST(send): ",location);
    this.http
      .post('http://localhost:4000/ping', location)
      .subscribe((res) => {});
  }

  ngOnInit() {
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition((pos) => {
        this.pingServer({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }
}