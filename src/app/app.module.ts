import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastosComponent } from './components/gastos/ingresar-gastos/ingresar-gastos.component';
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';
import { RouterLink } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastosComponent,
    ListarGastosComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
