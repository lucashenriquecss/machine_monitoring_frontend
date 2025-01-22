import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machine',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent implements OnInit{
  machine: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const machineId = this.route.snapshot.paramMap.get('id');
    if (machineId) {
      this.getMachineDetails(machineId);
    }
  }
  goBack(): void {
    this.router.navigate(['/home']); 
  }
  getMachineDetails(id: string): void {
    this.apiService.get(`machine/${id}`).subscribe({
      next: (response: any) => {
        if (response?.data) {
          this.machine = response.data;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar detalhes.');
      }
    });
  }
}
