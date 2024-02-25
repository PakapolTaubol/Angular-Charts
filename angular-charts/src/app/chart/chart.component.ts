import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['QR รับเงิน', 'พอยท์เพย์', 'สิทธิสวัสดิการฯ', 'ก๊าซหุงต้ม', 'E-Money', 'สิทธิภาคขนส่ง'],
      datasets: [
        {
          data: [26.26, 21.97, 17.64, 14.59, 12.25, 7],
          backgroundColor: [
            '#012B5F',
            '#BB9759',
            '#4EAEdC',
            '#26a69a',
            '#F2CB3B',
            '#6A3A3A'
          ]
        }
      ]
    };
  }
}