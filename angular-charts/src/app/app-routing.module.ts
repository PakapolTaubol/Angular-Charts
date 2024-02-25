import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
    {
        path: '',
        component: ChartComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
