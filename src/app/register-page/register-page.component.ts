import { Component, OnInit } from '@angular/core';
import {Individual} from '../models/individual';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {SaveIndividualService} from '../save-individual.service';
// import {IndividualDialogComponent} from '../individual-dialog/individual-dialog.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public form = new FormGroup({
      givenName: new FormControl(),
      familyName: new FormControl(),
      placeOfBirth: new FormControl(),
      birthDate: new FormControl(),
      title: new FormControl(),
    });
  individual: Individual[] = [
    {
      familyName: 'Buy milk',
      givenName: 'Go to the store and buy milk',
    },
    {
      familyName: 'Create a Kanban app',
      givenName: 'Using Firebase and Angular create a Kanban app!',
    },
  ];

  constructor(private dialog: MatDialog, private saveIndiv: SaveIndividualService) {
  }

  registerIndividual(form): void {
    console.log(form.value);
    this.saveIndiv.saveIndividual(form.value);
  }


  ngOnInit(): void {
  }

}
