import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  solicitations = [{
    title: "Solicitação de peças",
    date: "23/04/18 18:00"
  },
  {
    title: "Solicitação de novo operador",
    date: "23/04/18 18:00"
  }, {
    title: "Solicitação de manutenção",
    date: "23/04/18 18:00"
  }, {
    title: "Solicitação de vistoria",
    date: "23/04/18 18:00"
  },
  ]
}
