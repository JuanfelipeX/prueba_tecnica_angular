import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion/iniciar-sesion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  formulario: any = {};

  formularioUserByCorreo: any = [];

  constructor(
    private iniciarSesionService: IniciarSesionService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  /*
  ************************************************
  *          METODO 1 PARA HACER LOGIN           *
  ************************************************
  */
  getUsuarioByCorreo() {
    this.iniciarSesionService
      .obtenerUsuarioCorreo(this.formulario.email)
      .subscribe({
        next: (data) => {
          this.formularioUserByCorreo = data.Usuario;
        },
        error: (err) => { },
      });
  }

  iniciarSesionPorCorreo() {
    this.getUsuarioByCorreo();

    setTimeout(() => {
      if (this.formularioUserByCorreo == undefined) {
        console.log('NO paso');
      } else if (
        this.formulario.email == this.formularioUserByCorreo.email &&
        this.formulario.contrasena == this.formularioUserByCorreo.contrasena
      ) {
        console.log('Paso');
        localStorage.setItem(
          'contrasena',
          this.formularioUserByCorreo.contrasena
        );
        setTimeout(() => {
          this.router.navigateByUrl('pedido');
        }, 500);
      } else if (
        this.formulario.contrasena != this.formularioUserByCorreo.contrasena
      ) {
        console.log('Contrasena incorrecta');
      }
    }, 500);
  }

  /*
  ************************************************
  *          METODO 2 PARA HACER LOGIN           *
  ************************************************
  */
  login() {
    this.iniciarSesionService.login(this.formulario).subscribe(
      (response) => {
        // Lógica para manejar la respuesta exitosa
        console.log(response);
      },
      (error) => {
        // Lógica para manejar el error
        console.error(error);
      }
    );
  }
}
