import { PersonsService } from './../persons.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './../persons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personsArr: Person[] = [];
  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.personsService.getPersons$().subscribe((persons) => {
      this.personsArr = persons;
    });
  }
}
