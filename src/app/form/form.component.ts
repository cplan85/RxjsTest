import { PersonsService } from './../persons.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private personsService: PersonsService) {
    this.myForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      company: new FormControl(),
      telephone: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.personsService.addPerson(this.myForm.value);
  }
}
