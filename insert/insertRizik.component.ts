import { Component } from '@angular/core';
import { Rizik } from '../models/rizik.model'
import { ApiService } from '../services/apiService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'insert',
  templateUrl: './insertRizik.component.html'
})

export class InsertRizikComponent {
    model = new Rizik(0, '', '', 0, 0, 0);

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
