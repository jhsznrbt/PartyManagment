import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Individual} from '../models/individual';
import {SaveIndividualService} from '../save-individual.service';
import {MatDialog} from '@angular/material/dialog';

const input = Input();


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private dialog: MatDialog, private saveIndiv: SaveIndividualService) {
  }

  individuals: Individual[] = [
    {
      familyName: 'Teszt Elek',
      givenName: 'Mária'
    },
    {
      familyName: 'Kis János',
      givenName: 'Béla'
    }
  ];

  individuals2;
  individuals3 = [];

  ngOnInit(): void {
    // const nemtudom = this.saveIndiv.getIndividuals();
    this.getIndividuals();
    // console.log(this.individuals2.data().familyName);
  }

  getIndividuals(): void {
    this.saveIndiv.getIndividuals().subscribe(res => {
      // res = res as Individual[];
      this.individuals3 = [];
      res.forEach(el => {
       this.individuals3.push({indiv: el.payload.doc.data() as Individual, id: el.payload.doc.id});
       console.log(this.individuals3);
      });
    });
  }

  denyIndividual(individual): void {
    console.log(individual);
    this.saveIndiv.deleteIndividual(individual);
  }

  acceptIndividual(individual): void {
    individual.indiv.title = 'Beiratva';
    this.saveIndiv.updateIndividual(individual);

  }
}


// // tslint:disable-next-line:typedef
// getIndividuals() {
//   return this.firestore.collection('individuals').get().subscribe(res => {
//       res.docs.forEach(el => {
//         console.log(el.data());
//         });
//   });
// }



