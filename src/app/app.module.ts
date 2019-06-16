import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MonsterCreationComponent } from './components/monster-creation/monster-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterListComponent,
    NavbarComponent,
    MonsterCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
