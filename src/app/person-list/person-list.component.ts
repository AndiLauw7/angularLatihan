import { Component, OnInit } from '@angular/core';
import { Person } from '../entity/person';
import { PERSON } from '../entity/mock-person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  PersonList: Person[] = PERSON;
  constructor() {}

  ngOnInit(): void {}

  onEditClick(selectedPerson: Person): void {
    selectedPerson.edited = true;
  }

  onDeleteClick(selectedPerson: Person): void {
    selectedPerson.deleted = true;
  }
  // cara pertama perulangan
  // rating(n: number) {
  //   return new Array(n);
  // }
}
