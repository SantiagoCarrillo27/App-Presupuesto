import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.scss']
})
export class ListarGastosComponent implements OnInit, OnDestroy {

  presupuesto:number;
  restante:number;

  subscription: Subscription

  listGastos:any [] = [];

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }


  constructor(private _presupuestoService:PresupuestoService){
    this.presupuesto = 0;
    this.restante = 0;

    this.subscription = this._presupuestoService.getGasto().subscribe(data=>{
      this.restante -= data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



  aplicarColorRestante(){

    if(this.presupuesto/4 > this.restante){
      return 'alert alert-danger'
    } else if(this.presupuesto/2 > this.restante){
      return 'alert alert-warning'
    }else{
      return 'alert alert-secondary'
    }

  }

}
