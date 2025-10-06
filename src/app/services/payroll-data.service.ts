import { Injectable, signal, computed } from '@angular/core';
import { Observable, of } from 'rxjs';
import payrollData from '../../data/dummy.json';

// Define interfaces for our data structure
export interface Employee {
  id: string;
  name: string;
  employeeNumber: string;
  team: string;
}

export interface Summary {
  totalEarnings: number;
  totalDeductions: number;
  netTotal: number;
  uif: number;
  paye: number;
  total: number;
}

export interface Earning {
  id: number;
  name: string; // Eg Drafting
  description: string; // Eg Lorem ipsum
  type: string; // Eg Group 1
  quantity: number; // Eg: 3
  rate: number | null; // Eg 20.00
  hasInfoIcon: boolean;
}

export interface NavigationItem {
  id: number;
  label: string;
  active: boolean;
}

export interface PayrollData {
  employee: Employee;
  summary: Summary;
  earnings: Earning[];
  navigationItems: NavigationItem[];
}

@Injectable({
  providedIn: 'root', // This makes it available throughout the app
})
export class PayrollDataService {
  // Using Angular signals for reactive state management
  private readonly payrollData = signal<PayrollData>(
    payrollData as PayrollData,
  );

  // Computed signals that automatically update when the source data changes
  readonly employee = computed(() => this.payrollData().employee);
  readonly summary = computed(() => this.payrollData().summary);
  readonly earnings = computed(() => this.payrollData().earnings);
  readonly navigationItems = computed(() => this.payrollData().navigationItems);

  // Search functionality
  private readonly searchTerm = signal<string>('');
  readonly filteredEarnings = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.earnings();

    return this.earnings().filter(
      (earning) =>
        earning.name.toLowerCase().includes(term) ||
        earning.description.toLowerCase().includes(term) ||
        earning.type.toLowerCase().includes(term),
    );
  });

  // Sorting functionality
  private readonly sortColumn = signal<string>('');
  private readonly sortDirection = signal<'asc' | 'desc'>('asc');

  readonly sortedEarnings = computed(() => {
    const filtered = this.filteredEarnings();
    const column = this.sortColumn();
    const direction = this.sortDirection();

    if (!column) return filtered;

    return [...filtered].sort((a, b) => {
      let aValue: any = (a as any)[column];
      let bValue: any = (b as any)[column];

      // Handle null values
      if (aValue === null) aValue = 0;
      if (bValue === null) bValue = 0;

      // Handle string comparison
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (direction === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  });

  constructor() {
    console.log(
      'PayrollDataService initialized with data:',
      this.payrollData(),
    );
  }

  // Methods to update search and sort
  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  updateSort(column: string): void {
    if (this.sortColumn() === column) {
      // Toggle direction if same column
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      // New column, start with ascending
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }

  // Get current sort state
  getSortState() {
    return {
      column: this.sortColumn(),
      direction: this.sortDirection(),
    };
  }

  // Method to get data as Observable (useful for HTTP calls in the future)
  getPayrollData(): Observable<PayrollData> {
    return of(this.payrollData());
  }

  // Helper method to format currency
  formatCurrency(amount: number | null): string {
    if (amount === null) return '--';
    return `R ${amount.toFixed(2)}`;
  }
}
