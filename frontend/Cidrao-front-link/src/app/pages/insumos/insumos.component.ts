import { HttpClientModule } from '@angular/common/http';
import { InsumoService } from './../../services/insumo.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando o CommonModule para usar diretivas como *ngFor
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insumos',
  standalone: true,  // Definindo o componente como standalone
  imports: [CommonModule, FormsModule, RouterModule],  // Incluindo o CommonModule para uso de ngFor e outras diretivas do Angular
  templateUrl: './insumos.component.html',  // Usando o arquivo de template
  styleUrls: ['./insumos.component.css']  // Usando o arquivo de estilo
})
export class InsumosComponent implements OnInit {
  // Dados fictícios para preencher a tabela
  // insumos = [
  //   { nome: 'Farinha', descricao: 'Farinha de trigo', quantidade: 50, validade: '2025-12-01' },
  //   { nome: 'Açúcar', descricao: 'Açúcar cristal', quantidade: 20, validade: '2025-08-01' },
  //   { nome: 'Ovo', descricao: 'Ovo de galinha', quantidade: 100, validade: '2025-05-01' }
  // ];

  constructor(
    private insumoService: InsumoService
  ){}

  nome: string = '';
  descricao: string = '';
  quantidade: number = 0;
  dataEntrada: Date = new Date();
  dataValidade: Date = new Date();
  dataSaida: Date | null = null;
  insumos: any[] = [];

  ngOnInit(): void {
    this.insumoService.getTodosInsumo().subscribe((resposta) => {
      this.insumos = resposta;
    })
  }

  montarBody() {
    const body = {
      nome: this.nome,
      descricao: this.descricao,
      quantidade: this.quantidade,
      dataEntrada: this.formatarData(this.dataEntrada),
      dataValidade: this.formatarData(this.dataValidade),
      dataSaida: this.dataSaida ? this.formatarData(this.dataSaida) : null
    };

      // Só adiciona dataSaida se realmente for preenchida
  if (this.dataSaida) {
    body.dataSaida = this.formatarData(this.dataSaida);
  }
  
    console.log('📦 Enviando:', body);
  
    this.insumoService.salvarInsumo(body).subscribe({
      next: (res) => {
        console.log('✅ Salvo com sucesso:', res);
      },
      error: (err) => {
        console.error('❌ Erro ao salvar:', err);
      }
    });
  }
  formatarData(data: Date): string {
    const d = new Date(data);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }
  
}  
