import {Component, OnInit, Input, SimpleChanges} from '@angular/core';

import {Customer} from '../../shared/interfaces';
import {SorterService} from '../../core/sorter.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private Customers: Customer[] = [];
  @Input() get customers(): Customer[] { // Getting data inputted from Customers component
    return this.Customers;
  }

  set customers(value: Customer[]) { // Setting filteredCustomers to the value from filter component
    if (value) {
      this.filteredCustomers = this.Customers = value;
      this.calculateOrders(); // Recalculates the total order to display the correct amount
    }
  }

  filteredCustomers: Customer[] = []; // This is for the input field
  customersOrderTotal: number;
  currencyCode = 'GBP'; // Currency type I will use in my application

  constructor(private sorterService: SorterService) { }

  ngOnInit() {
  }

  // This method will calculate the total order of all the customers
  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((CST: Customer) => { // Loops for each customer and adds to the orderTotal
      this.customersOrderTotal += CST.orderTotal;
    });
  }
  // Filtering code, when user types in input field will filter to inserted user or city name
  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((CST: Customer) => {
        return CST.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          CST.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          CST.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop);
    // A sorter service will handle the sorting

  }

}
