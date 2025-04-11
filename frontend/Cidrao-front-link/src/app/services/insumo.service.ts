import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  private insumos = [
    { id: 1, nome: 'Farinha de Trigo', descricao: 'Usada para bolos e pães', quantidade: 50, validade: '2024-12-10' },
    { id: 2, nome: 'Fermento Biológico', descricao: 'Ajuda no crescimento da massa', quantidade: 20, validade: '2024-11-20' },
    { id: 3, nome: 'Ovos', descricao: 'Essencial para a textura dos bolos', quantidade: 100, validade: '2024-10-15' }
  ];

  constructor(
    private readonly http: HttpClient
  ) { }

  getInsumos() {
    return this.insumos; // Retorna os insumos mockados
  }

  salvarInsumo(insumo: any): Observable<any> {
    return this.http.post('http://localhost:8080/insumos', insumo);
  }

  getTodosInsumo(): Observable<any> {
    return this.http.get(`http://localhost:8080/insumos`);
  }

  // DELETE: Remove um insumo baseado no id
  deleteInsumo(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/insumos/${id}`, { responseType: 'text' });
  }
  

  // PUT: Atualiza um insumo no backend utilizando o id para identificar o registro
  updateInsumo(id: number, insumo: any): Observable<any> {
    return this.http.put(`http://localhost:8080/insumos/${id}`, insumo);
  }

// GET: Retorna os insumos vencidos ou prestes a vencer
getInsumosVencer(): Observable<any> {
  return this.http.get('http://localhost:8080/insumos/vencer');
}

}

