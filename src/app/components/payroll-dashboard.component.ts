import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PayrollDataService } from '../services/payroll-data.service';

@Component({
  selector: 'app-payroll-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payroll-dashboard.component.html',
  styleUrls: ['./payroll-dashboard.component.scss'],
})
export class PayrollDashboardComponent {
  // Inject the service using the modern inject() function
  private readonly payrollService = inject(PayrollDataService);

  // Expose the computed signals from the service
  readonly employee = this.payrollService.employee;
  readonly summary = this.payrollService.summary;
  readonly earnings = this.payrollService.sortedEarnings;
  readonly navigationItems = this.payrollService.navigationItems;

  // Search term for the template
  searchTerm = '';

  // Methods to handle user interactions
  onSearchChange(): void {
    this.payrollService.updateSearchTerm(this.searchTerm);
  }

  onSort(column: string): void {
    this.payrollService.updateSort(column);
  }

  getSortState() {
    return this.payrollService.getSortState();
  }

  formatCurrency(amount: number | null): string {
    return this.payrollService.formatCurrency(amount);
  }
}
