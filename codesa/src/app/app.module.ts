import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListaComponent } from './components/lista/lista.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ServiceService } from './Service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListaComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ServiceService 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
