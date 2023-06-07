import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class IniciarSesionService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearUsuario(data: any) {
    return this.http.post(this.URL_BASE + 'usuarios', data);
  }

  obtenerUsuarios() {
    return this.http.get<any>(this.URL_BASE + 'usuarios');
  }

  obtenerUsuarioCorreo(email: any) {
    return this.http.get<any>(this.URL_BASE + 'usuario/correo/' + email);
  }


  login(data: any) {
    return this.http.post(this.URL_BASE + 'login', data);
  }
}
