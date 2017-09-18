import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
form;
  ngOnInit() {
    this.form = new FormGroup ({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      languages: new FormControl(' '),
    }); }
  onSubmit = function (user) {
    console.log(user);
  };

}
