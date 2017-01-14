import { Component } from '@angular/core';
import { Proces } from '../models/proces.model'
import { ApiService } from '../services/apiService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'insert',
  templateUrl: './insertProces.component.html'
})

export class InsertProcesComponent {
    model = new Proces(0, '', '', 0);

  constructor(private apiService: ApiService, private router: Router){
   
  }

  submitForm(form: NgForm){
    //this.apiService.insertModel(this.model).subscribe();
    this.redirect();
  }

  redirect(){
      this.router.navigate(['./home']);
  }
}
