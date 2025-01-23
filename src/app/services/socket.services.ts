import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class SocketService {
    private socket: Socket;
  
    constructor() {
      this.socket = io('http://localhost:3000', {
        transports: ['websocket', 'polling'],
      });
    }
  
    connect() {
      this.socket.connect();
    }
  
    disconnect() {

      this.socket.disconnect();
    }
  
    monitorMachine(machineId: string) {
      this.socket.emit('monitor-machine', machineId);
      console.log(this.socket.emit('monitor-machine', machineId))
      return new Observable(observer => {
        console.log("observe monitor"+observer+ ' ' + machineId)
        this.socket.on(`machine-${machineId}`, (data) => {
          console.log("final monitor"+JSON.stringify(data))
          observer.next(data);
        });
      });
    }
  
    onTelemetryBroadcast() {
      return new Observable(observer => {
        this.socket.on('telemetry-broadcast', (data) => {
          observer.next(data);
        });
      });
    }
  
    updateTelemetry(payload: any) {
      this.socket.emit('telemetry-update', payload);
    }
  }