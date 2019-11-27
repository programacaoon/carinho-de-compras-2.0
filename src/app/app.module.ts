import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ComidaChinesaComponent } from './comida-chinesa/comida-chinesa.component';

import { TobBarComponent } from './tob-bar/tob-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PorcoesComponent } from './porcoes/porcoes.component';
import { LancheComponent } from './lanche/lanche.component';
import { JaponesComponent } from './japones/japones.component';
import { BuffetComponent } from './buffet/buffet.component';
import { JaponesaDetailComponent } from './japonesa-detail/japonesa-detail.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    // ComidaChinesaComponent,
   
    TobBarComponent,
   
    HomeComponent,
   
    AboutComponent,
   
    Error404Component,
   
    LoginComponent,
   
    CadastroComponent,
   
    PorcoesComponent,
   
    LancheComponent,
   
    JaponesComponent,
   
    BuffetComponent,
   
    JaponesaDetailComponent,
   
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about/:id', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'porcoes', component: PorcoesComponent },
      { path: 'lanche', component: LancheComponent },
      { path: 'japones', component: JaponesComponent },
      { path: 'Buffet', component: BuffetComponent },
      { path: 'chinesas/:chinesaId', component: JaponesaDetailComponent },
      { path: 'cart', component: CartComponent },
      {
        path: '**', component: Error404Component
      },

    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
