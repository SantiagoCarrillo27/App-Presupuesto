import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.scss']
})
export class IngresarGastosComponent {


  nombreGasto: String;
  cantidad:number;
  formularioIncorrecto: boolean;
  textIncorrecto:String;


  ngOnInit():void{


  }
  constructor(private _presupuestoService : PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto ='';
  }


  agregarGasto(){

    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada mayor que el presupuesto';
      return;
    }

    if(this.nombreGasto === '' && this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.nombreGasto = '';
      this.cantidad = 0;
      this.textIncorrecto ='Nombre gasto o cantidad incorrecta';
      return;
    }if(this.nombreGasto === '' || this.cantidad <= 0){

      this.formularioIncorrecto = true;
      this.textIncorrecto = '¡¡ Ups, faltan datos por llenar !!';
      return;
    }else{

      const GASTO = {
        nombre : this.nombreGasto,
        cantidad : this.cantidad,

      }

      this._presupuestoService.agregarGasto(GASTO);


      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }


}
