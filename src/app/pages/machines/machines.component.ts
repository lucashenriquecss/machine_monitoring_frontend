import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-machines',
  imports: [CommonModule],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent {
  machines = [{
    name: "NMM255F",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "offline",
    date: "23/04/18",
    operator: {
      name: "John Michael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255F",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "offline",
    date: "23/04/18",
    operator: {
      name: "John Michael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255FA",
    serie: "5555662144562",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "maintence",
    date: "23/04/18",
    operator: {
      name: "John MicFhael",
      email: "testegmail.com"
    }
  },
  {
    name: "NMM255FH",
    location: "Deposito B",
    latitude: -32.222222,
    longitude: -10.555555,
    status: "online",
    date: "23/04/18",
    operator: {
      name: "JohDn Michael",
      email: "testegmail.com"
    }
  },
  ]
}
