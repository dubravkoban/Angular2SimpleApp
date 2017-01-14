import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

import { InsertProcesComponent } from './insert/insertProces.component';
import { InsertAktivnostComponent } from './insert/insertAktivnost.component'; 
import { InsertRizikComponent } from './insert/insertRizik.component'; 

import { EditProcesComponent } from './edit/editProces.component';
import { EditAktivnostComponent } from './edit/editAktivnost.component'; 
import { EditRizikComponent } from './edit/editRizik.component'; 



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'proces/insert', component: InsertProcesComponent },
  { path: 'aktivnost/insert', component: InsertAktivnostComponent },
  { path: 'rizik/insert', component: InsertRizikComponent },

  { path: 'proces/edit/:id', component: EditProcesComponent },
  { path: 'aktivnost/edit/:id', component: EditAktivnostComponent },
  { path: 'rizik/edit/:id', component: EditRizikComponent },

  { path: 'proces/delete/:id', component: HomeComponent },
  { path: 'aktivnost/delete/:id', component: HomeComponent },
  { path: 'rizik/delete/:id', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

