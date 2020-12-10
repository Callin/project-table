import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../model/person";
import {HeaderItem} from "./model/header-item";
import {RowItem} from "./model/row-item";
import {Row} from "./model/row";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableHeader: HeaderItem [] = [];
  rows: Row [] = [];
  @Input("persons") persons: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {
    let classFields = Object.getOwnPropertyNames(new Person());
    classFields.forEach(field => this.tableHeader.push(HeaderItem.getItem(field, field, true)));
    // this.tableHeader.filter(headerItem => headerItem.id === '_id')[0].isVisible = false;
    this.persons
      .forEach(person => {
        let row: Row = new Row();
        this.tableHeader
          .forEach(headerItem => {
            if (person.hasOwnProperty(headerItem.id)) {
              row.rowItems.push(RowItem.getItem(person[headerItem.id], headerItem));
            }
          })
        if (row.rowItems.length !== 0) {
          this.rows.push(row);
        }
      });
    console.log("1st person = ", this.persons[0].address);
  }
}
