import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Months } from '../../services/utils/Months';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  chartBar: any = [];
  chartLine: any = [];
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


  ngOnInit(): void {
    this.chartBar = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: '# Meses',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })

    this.chartLine = new Chart('canvas', {
      type: 'line',
      data: {
        labels: Months.months({ count: 7 }),
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
    })
  }
}
