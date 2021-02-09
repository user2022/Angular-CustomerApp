import { Component, OnInit, Input } from '@angular/core';
import { Customer} from '../shared/interfaces';

import { DataService } from '../core/data.service'; // Importing the data service which contains my customer and order data
import {Data} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title = 'Customers';
  people: Customer[];
  constructor(private dataService: DataService) { } // The service in my core folder is declared here

  ngOnInit() { // This will subscribe to the data so if anything changes it will update dynamically
    // It will return the list of customers
    this.dataService.getCustomers().subscribe((customers: Customer[]) => this.people = customers); // Setting people to the customer list
    // This was test data before I included my service
    // this.people = [
    //   { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //   { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //   { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //   { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    // ];
  }

}
