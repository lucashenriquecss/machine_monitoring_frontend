import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
    providedIn: 'root'
  })
  export class SocketService {
    private socket: Socket;
  
    constructor() {
      this.socket = io(environment.webSocketUrl, {
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
      return new Observable(observer => {
        this.socket.on(`machine-${machineId}`, (data) => {
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