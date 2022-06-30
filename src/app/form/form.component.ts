import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      company: new FormControl(),
      telephone: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {}
}
