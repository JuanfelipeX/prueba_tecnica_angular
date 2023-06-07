import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  fechaActual = new Date();

  formulario: any = {};

  constructor(
    private pedidosService: PedidosService,
    private router: Router
  ) {
    this.fechaActual = new Date();
    this.formulario = {
      fecha_pedido: this.fechaActual,
    };
  }

  ngOnInit(): void {
  }

  /*
  ************************************************
  *              REGISTRAR PEDIDOS               *
  ************************************************
  */
  registrarPedido() {
    this.pedidosService.crearPedido(this.formulario).subscribe({
      next: (data) => { 
        console.log("Pedido Registrado");
      },
      error: (err) => { 
        console.log("Pedido NO Registrado");
      },
    });
  }

}
