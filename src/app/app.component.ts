import { Component } from '@angular/core';
import { Individual} from './models/individual';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
// import {IndividualDialogResult, RegisterIndividualComponent} from "./register-individual/register-individual.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Szecskófalvi Iskola';
  individual: Individual[] = [
    {
      familyName: 'Teszt Elek',
      givenName: 'Mária'
    },
    {
      familyName: 'Kis János',
      givenName: 'Béla'
    }
  ];


}


