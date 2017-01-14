import { Component } from '@angular/core';
import { Rizik } from '../models/rizik.model'
import { Subscription } from 'rxjs';
import { ApiService } from '../services/apiService.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'edit',
  templateUrl: './editRizik.component.html'
})

export class EditRizikComponent implements OnInit, OnDestroy {
    model = new Rizik(0, '', '', 0, 0, 0);
    subscription: Subscription;
    id: number;

 constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute){
  //  this.apiService.getModelById(this.model , this.id)
  //                 .subscribe(
  //                   data => this.model = data,
  //                   err => console.log("error: ", err)
  //               );

    //this.redirect();
  }

  ngOnInit(){
      this.subscription = this.activatedRoute.params.subscribe(
          (param: any) => {
            this.id = param['id'];
            console.log(this.id);
        });
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
    
submitForm(form: NgForm){
    // this.apiService.postRizikForm(this.model)
    //             .subscribe(err => console.log("error: ", err));

    this.redirect();
}   

  redirect(){
      this.router.navigate(['./home']);
  }
}