import {Component, OnInit} from '@angular/core';
import {Person} from "./model/person";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-table';

  persons: Person[];
  url = "https://next.json-generator.com/api/json/get/EyGmGt-sF";
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Person[]>(this.url).pipe(
      tap((data) => {
        this.persons = data;
      })
    ).subscribe();
  }
}
