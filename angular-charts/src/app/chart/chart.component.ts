import { Component, OnInit } from '@angular/core';
interface ExpenseItem {

  name: string;

  percentage: string;

  amount: string;

}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  data: any;
  constructor() { }

  expenseItems: ExpenseItem[] = [
    { name: 'QR รับเงิน', percentage: '26.26%', amount: '180,000.00' },
    { name: 'พอยท์เพย์', percentage: '21.97%', amount: '150,600.50' },
    { name: 'สิทธิสวัสดิการฯ', percentage: '17.64%', amount: '120,900.50' },
    { name: 'ก๊าซหุงต้ม', percentage: '14.59%', amount: '100,000.00' },
    { name: 'E-Money', percentage: '12.25%', amount: '84,000.00' },
    { name: 'สิทธิภาคขนส่ง', percentage: '7.00%', amount: '50,000.00' },

  ];

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