import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  persons!: Person[];
  selectedPerson!: Person;
  
  constructor(public dataService: DataService) { }

  selectFirstPerson() {
    this.selectedPerson = this.persons[0];
  }

  deletePerson(id: number) {
    this.dataService.deletePerson(id);
    this.selectFirstPerson();
  }
  
  ngOnInit(): void {
    this.persons = this.dataService.getPersons();
    this.selectFirstPerson();
  }

}
