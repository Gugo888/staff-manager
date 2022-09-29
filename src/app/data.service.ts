import { Injectable } from '@angular/core';
import { PERSONS } from 'src/assets/data';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getPersons(): Person[] {
    return PERSONS;
  }

  getPersonByID(id: number): Person {
    return PERSONS.find(person => person.id === id);
  }

  creatPerson(person: Person) {
    const nextID = PERSONS[PERSONS.length - 1].id + 1;
    person.id = nextID;
    PERSONS.push(person)
  }

  editPerson(id: number, person: Person) {
    Object.assign(this.getPersonByID(id), person);
  }

  deletePerson(id: number) {
    PERSONS.splice(PERSONS.findIndex(person => person.id === id), 1)
  }
}
