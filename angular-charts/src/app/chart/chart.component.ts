import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
interface SaleProportion {
  name: string;
  percentage: number;
  amount: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  data: any;
  plugin: any;
  options: any;
  constructor() { }

  saleProportion: SaleProportion[] = [
    { name: 'QR รับเงิน', percentage: 26.26, amount: '180,000.00', backgroundColor: '#012B5F' },
    { name: 'พอยท์เพย์', percentage: 21.97, amount: '150,600.50', backgroundColor: '#BB9759' },
    { name: 'สิทธิสวัสดิการฯ', percentage: 17.64, amount: '120,900.50', backgroundColor: '#4EAEDC' },
    { name: 'ก๊าซหุงต้ม', percentage: 14.59, amount: '100,000.00', backgroundColor: '#26A69A' },
    { name: 'E-Money', percentage: 12.70, amount: '84,000.00', backgroundColor: '#6A3A3A' },
    { name: 'สิทธิภาคขนส่ง', percentage: 7.00, amount: '50,000.00', backgroundColor: '#F2CB3B' },
  ];

  ngOnInit(): void {
    this.data = {
      // labels: this.saleProportion.map(item => item.name),
      datasets: [
        {
          data: this.saleProportion.map(item => item.percentage),
          backgroundColor: this.saleProportion.map(item => item.backgroundColor),
          borderWidth: 0,
          animation: false,
          cutout: 70,
          // hoverOffset: 10,
          datalabels: {

            anchor: 'end',
            align: 'end',
            color: '#597284',
            font: {
              size: 16
            },
            offset: 0,
            formatter: ((value: number) => {
              // if Integer return x% format,If not Integer will return x.xx% format
              const isInteger = Math.floor(value) === value;
              if (isInteger) {
                return `${value}%`; // x%
              } else {
                return `${value.toFixed(2)}%`; // x.xx%
              }
            })
          }
        }
      ],
    };

    this.options = {
      plugins:{
        tooltip: {
          enabled: false
        }
      },
      layout: {
        padding: 60
      }
    }

    this.plugin = [ChartDataLabels]
  }
}