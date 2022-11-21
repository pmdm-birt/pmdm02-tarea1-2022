import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasLeerService {

  private noticiasLeer: Article [] = [];

  constructor() {

  }

  addNoticia(item : Article) {
    // copiar item
    let itemString = JSON.stringify(item);
    item = JSON.parse(itemString);

    // Añadirlo
    this.noticiasLeer.push(item);
    // console.log(this.noticiasLeer);
  }

  buscar(item: Article): number  {
    let articuloEncontrado: any = this.noticiasLeer.find(
      function(cadaArticulo) { 
        return JSON.stringify(cadaArticulo) == JSON.stringify(item);
      }
    );
    let indice = this.noticiasLeer.indexOf(articuloEncontrado);
    return indice;
  }

  borrarNoticia(item: Article) {
    let indice = this.buscar(item);
    if (indice != -1) {
      this.noticiasLeer.splice(indice, 1);
      // console.log(this.noticiasLeer); 
    }
  }

  seleccionado(item: Article): boolean {
    let indice: number = this.buscar(item);
    if (indice != -1) {
      return true;
    }
    return false; 
  }

  getNoticias() {
    return this.noticiasLeer;
  }
}
