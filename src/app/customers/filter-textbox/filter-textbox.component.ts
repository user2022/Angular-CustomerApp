import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
  private Filter: string;
  @Input() get filter() { // Getting data from customer list component, this will be the data that has been filtered using
    // the input field
    return this.Filter;
  }

  set filter(val: string) {
    this.Filter = val;
    this.changed.emit(this.filter); // Emit the filtered data to customer list component
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>(); // Outputting the data to customer list

  constructor() { }

  ngOnInit() {
  }

}
