import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { NgxCurrencyModule } from "ngx-currency";

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTimesComponent } from './listar-times/listar-times.component';
import { CriarTimeComponent } from './criar-time/criar-time.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { UfsservicosService } from './servicos/ufsservicos.service';
import { DetalhesTimeComponent } from './detalhes-time/detalhes-time.component';
import { VotarTimeComponent } from './votar-time/votar-time.component';

registerLocaleData(localePt);


const appRouters: Routes = [
  {
    path: 'listar', 
    component: ListarTimesComponent
  },
  {
    path: 'criar/:id', 
    component: CriarTimeComponent
  },
  {
    path: 'detalhes/:id', 
    component: DetalhesTimeComponent
  },
  {
    path: 'votar', 
    component: VotarTimeComponent
  },
  {
    path: '', 
    redirectTo: 'listar', 
    pathMatch: 'full'
  }  
]

@NgModule({
  declarations: [
    AppComponent,
    ListarTimesComponent,
    CriarTimeComponent,
    DetalhesTimeComponent,
    VotarTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
    BsDatepickerModule.forRoot(),
    NgxCurrencyModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    UfsservicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
