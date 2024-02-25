import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './chart/chart.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
