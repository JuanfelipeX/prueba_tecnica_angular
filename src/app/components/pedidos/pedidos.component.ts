import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  formulario: any = {};

  constructor(
    // private HerramientaService: HerramientasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /*
  ************************************************
  *              REGISTRAR HERRAMIENTA           *
  ************************************************
  */
  //  registrarHerramientas() {
  //   this.HerramientaService.crearHerramienta(this.formulario).subscribe({
  //     next: (data) => {},
  //     error: (err) => {},
  //   });
  // }

}
