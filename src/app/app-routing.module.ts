import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { MonsterCreationComponent } from './components/monster-creation/monster-creation.component';

const routes: Routes = [
  { path: 'monster-list', component: MonsterListComponent },
  { path: 'monster-edit/:id', component: MonsterCreationComponent },
  { path: '', redirectTo: 'monster-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
