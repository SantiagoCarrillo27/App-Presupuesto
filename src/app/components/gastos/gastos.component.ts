import { PresupuestoService } from './../../services/presupuesto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {

  constructor(private _presupuestoService:PresupuestoService){

  }

  ngOnInit():void{
    console.log(this._presupuestoService.presupuesto)
  }

}
