import { Router } from '@angular/router';
import { PresupuestoService } from './../../services/presupuesto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {

  constructor(private _presupuestoService:PresupuestoService, private router : Router){

  }

  ngOnInit():void{
    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto'])
    }
    console.log(this._presupuestoService.presupuesto)
  }

}
