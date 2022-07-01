import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Person {
  name: string;
  surname: string;
  company: string;
  email: string;
  telephone: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private persons: Person[];
  private persons$: Subject<Person[]>;

  constructor() {
    this.persons = [];
    this.persons$ = new Subject();
  }

  addPerson(pPerson: Person) {
    this.persons.push(pPerson);
    this.persons$.next(this.persons);
  }

  getPersons$(): Observable<Person[]> {
    return this.persons$.asObservable();
  }
}
