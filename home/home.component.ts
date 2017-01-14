import {Component} from '@angular/core';
import { Rizik } from '../models/rizik.model';
import { Aktivnost } from '../models/aktivnost.model';
import { Proces } from '../models/proces.model';
import { ApiService } from '../services/apiService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  // for testing purposes
  modelProces = [{ procesiId: 0, naziv: 'naziv', opis: 'opis', prioritet: 2}, { procesiId: 1, naziv: 'naziv2', opis: 'opis2', prioritet: 2 }];

  // uncomment this
  //modelProces: Proces[];
  modelRizik: Rizik[];
  modelAktivnost: Aktivnost[];

  constructor(private apiService: ApiService, private router: Router){

      //this.apiService.getModels(this.modelProces).subscribe();
  }

  loadOthers(procesiId: number){
    // logika da loada aktivnosti i rizike
    console.log(procesiId);

    //  this.apiService.getRizici()
    //               .subscribe(
    //                 data => this.modelRizik = data,
    //                 err => console.log("error: ", err)
    //               );

    //   this.apiService.getAktivnosti()
    //             .subscribe(
    //               data => this.modelRizik = data,
    //               err => console.log("error: ", err)
    //             );         
  }

  redirectNewRizik() {
    this.router.navigate(['/rizik/insert']);
  }

  redirectNewProces() {
    this.router.navigate(['/proces/insert']);
  }

  redirectNewAktivnost() {
    this.router.navigate(['/aktivnost/insert']);
  }

  redirectEdit(id: number){
    if(id == -1)
      return;

    this.router.navigate(['./edit/' + id]);
  }

  deleteRizik(rizik: string){
    console.log(rizik);
  
    if (rizik != null)
    {
      //this.apiService.deleteRizik(rizik);
    }
  }

   deleteProces(id: number){
    console.log(id);
  
    if (id != null)
    {
      //this.apiService.deleteModel(this.modelProces[0], id);
    }
  }

  submitForm(form: NgForm){

  }
}
