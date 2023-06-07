import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearPedido(data: any) {
    return this.http.post(this.URL_BASE + 'pedidos', data);
  }

  obtenerPedidos() {
    return this.http.get<any>(this.URL_BASE + 'pedidos');
  }
}