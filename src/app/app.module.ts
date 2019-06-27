import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MonsterCreationComponent } from './components/monster-creation/monster-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './interceptors';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { MonsterEditComponent } from './components/monster-edit/monster-edit.component';
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterListComponent,
    NavbarComponent,
    MonsterCreationComponent,
    RegisterComponent,
    LoginComponent,
    MonsterDetailComponent,
    MonsterEditComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
