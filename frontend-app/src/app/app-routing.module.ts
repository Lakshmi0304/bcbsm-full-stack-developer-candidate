import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {DocumentComponent} from './document/document.component'
import {DocumentTableComponent} from './documents-table/documents-table.component'
import { authenticationGuard } from './services/auth.guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'document', component: DocumentComponent,canActivate: [authenticationGuard()] },
  { path: 'doclist', component:   DocumentTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
