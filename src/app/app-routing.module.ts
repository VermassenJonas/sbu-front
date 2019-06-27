import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { MonsterCreationComponent } from './components/monster-creation/monster-creation.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { MonsterEditComponent } from './components/monster-edit/monster-edit.component';

const routes: Routes = [
  { path: 'monster-list', component: MonsterListComponent },
  { path: 'monster-detail/:id', component: MonsterDetailComponent },
  { path: 'monster-edit/:id', component: MonsterEditComponent },
  { path: 'monster-create', component: MonsterCreationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'monster-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
