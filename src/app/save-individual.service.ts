// @ts-ignore
// @ts-ignore
// @ts-ignore

import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Individual} from './models/individual';



@Injectable({
  providedIn: 'root'
})
export class SaveIndividualService {

  constructor(private firestore: AngularFirestore) {
  }


  saveIndividual(Individuals): boolean {
    this.firestore.collection('individuals').add(Individuals).then(res => {
      return true;
    }).catch(error => {
      console.log('error: ', error);
      return false;
    });
    return false;
  }

  // tslint:disable-next-line:typedef
  getIndividuals() {
    return this.firestore.collection('individuals').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  deleteIndividual(data) {
    return this.firestore.collection('individuals').doc(data).delete();
  }

  // tslint:disable-next-line:typedef
  updateIndividual(data){
    return this.firestore.collection('individuals').doc(data.id).set(data.indiv);
  }

  // // tslint:disable-next-line:typedef
  // getIndividuals() {
  //   return this.firestore.collection('individuals').get().subscribe(res => {
  //       res.docs.forEach(el => {
  //         console.log(el.data());
  //         });
  //   });
  // }


}
