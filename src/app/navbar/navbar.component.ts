import { PersonsService } from './../persons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  personsNum: number = 0;

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.personsService.getPersons$().subscribe((persons) => {
      this.personsNum = persons.length;
    });
  }
}
