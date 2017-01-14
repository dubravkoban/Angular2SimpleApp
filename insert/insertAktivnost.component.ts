import { Component } from '@angular/core';
import { Aktivnost } from '../models/aktivnost.model'
import { ApiService } from '../services/apiService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'insert',
  templateUrl: './insertAktivnost.component.html'
})

export class InsertAktivnostComponent {
    model = new Aktivnost(0, '', '', 0, 0, 0);

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