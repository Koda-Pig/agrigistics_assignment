import { Component } from '@angular/core';
import { PayrollDashboardComponent } from './components/payroll-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PayrollDashboardComponent],
  template: '<app-payroll-dashboard></app-payroll-dashboard>',
  styleUrl: '../styles/index.scss',
})
export class App {}
