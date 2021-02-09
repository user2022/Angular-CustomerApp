import { Injectable } from '@angular/core'; // Injectable allows me to inject the service into my application
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {Customer, Order} from '../shared/interfaces'; // My interface types

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'assets/'; // This is the file path to my data
  constructor(private http: HttpClient) { } // Creating a http request instance
  // This method will return all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers.json') // This will return all the customers in the shape of my
      // Customer interface which I imported above to use it as a type
      .pipe(catchError(this.HandleError)); // the pipe will catch errors
  }

  // This method will get the customer by the selected ID
  getCustomer(id: number): Observable<Customer> { // Get customer by ID
    return this.http.get<Customer[]>(this.baseUrl + 'customers.json')
      .pipe(map(customers => { // Here I am using map to manipulate the data
        const customer = customers.filter((CST: Customer) => CST.id === id); // Getting the ID of the customer
        return (customer && customer.length) ? customer[0] : null; // if customer length is 0 return null else return the customer and
          // the length
      }),
        catchError(this.HandleError) // Use handleError method to handle any errors that may occur
        );
  }
  // This method will get the orders of the customer
  getOrders(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders.json') // Getting the orders using http request
      .pipe(
        map(orders => { // Manipulating the data ( orders) and making sure the order ID matches that of the customer
          const CustOrders = orders.filter((order: Order) => order.customerId === id);
          return CustOrders; // return the customers orders
        }),
        catchError(this.HandleError)
      );
  }

  // I will use this method to handle errors
  private HandleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
