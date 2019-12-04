import { Injectable } from '@angular/core';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel :any;

  // initialize Pusher in the constructor.
  constructor() {
    Pusher.logToConsole = true;
    
    const pusher = new Pusher('398edc7080841d2f4561', {
      cluster: 'ap2',
      forceTLS: true
    });

    this.channel = pusher.subscribe('location');
  }

  // The init method returns the Pusher property we created.
  public init() {
    return this.channel;
  }
}
