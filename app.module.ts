import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

import { ApiService } from './services/apiService.service';

import { InsertProcesComponent } from './insert/insertProces.component';
import { InsertAktivnostComponent } from './insert/insertAktivnost.component';
import { InsertRizikComponent } from './insert/insertRizik.component';

import { EditProcesComponent } from './edit/editProces.component';
import { EditAktivnostComponent } from './edit/editAktivnost.component';
import { EditRizikComponent } from './edit/editRizik.component';

import {Config} from '../config'



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,

    InsertProcesComponent,
    InsertAktivnostComponent,
    InsertRizikComponent,

    EditProcesComponent,
    EditAktivnostComponent,
    EditRizikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    ApiService,
    GithubService,
    Config
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
