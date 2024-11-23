import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
    <div class="card mt-4">
      <div class="card-header">
        <h5 class="mb-0">Statistiques des meilleurs buteurs</h5>
      </div>
      <div class="card-body">
        <canvas baseChart
          [data]="barChartData"
          [options]="barChartOptions"
          [type]="'bar'">
        </canvas>
      </div>
    </div>
  `
})
export class StatisticsComponent implements OnInit {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  public barChartData: ChartConfiguration['data'] = {
    labels: ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5'],
    datasets: [
      {
        data: [15, 12, 10, 9, 8],
        label: 'Buts marqués',
        backgroundColor: '#FFD700',
        borderColor: '#000000',
        borderWidth: 1
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}