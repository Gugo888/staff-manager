import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNumber, range } from 'src/app/validators';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  id: string;
  isNewPerson: boolean;

  constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  get firstName() {
    return this.personForm.get('firstName')
  }

  get lastName() {
    return this.personForm.get('lastName')
  }

  get age() {
    return this.personForm.get('age')
  }

  get salary() {
    return this.personForm.get('salary')
  }

  get startWork() {
    return this.personForm.get('startWork')
  }


  save() {
    if (this.isNewPerson) {
      this.dataService.creatPerson(this.personForm.value);
    } else {
      this.dataService.editPerson(+this.id, this.personForm.value);
    }

    this.router.navigate(['/persons']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isNewPerson = this.id === 'new';

    this.personForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, isNumber, range(18, 60)]),
      salary: new FormControl('', [Validators.required, isNumber, Validators.min(1)]),
      startWork: new FormControl('', [Validators.required])
    })

    if (!this.isNewPerson) {
      this.personForm.patchValue(this.dataService.getPersonByID(+this.id))
    }
  }

}


