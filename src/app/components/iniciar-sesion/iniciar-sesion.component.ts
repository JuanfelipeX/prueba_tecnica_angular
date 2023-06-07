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

  constructor(
    private iniciarSesionService: IniciarSesionService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  iniciarSesion() {
    this.iniciarSesionService
      .obtenerUsuariosCorreo(this.formulario.email)
      .subscribe({
        next: (data) => {
          const usuario = data.Usuario;
          if (usuario) {
            if (this.formulario.contrasena === usuario.contrasena) {
              console.log('Inicio de sesión exitoso');
              localStorage.setItem('contrasena', usuario.contrasena);
              setTimeout(() => {
                this.router.navigateByUrl('inicio');
              }, 500);
            } else {
              console.log('Contraseña incorrecta');
            }
          } else {
            console.log('Usuario no encontrado');
          }
        },
        error: (err) => {
          console.log('Error al iniciar sesión', err);
        },
      });
  }
}
