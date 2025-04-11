import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InsumoService } from '../../services/insumo.service';

@Component({
  selector: 'app-movimentacao',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  insumos: any[] = [];
  formulario!: FormGroup; // Propriedade para o formulário

  constructor(
    private insumoService: InsumoService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder // Injeção do FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarInsumos();
    this.verificarInsumosVencer();
    // Exemplo: Se você quiser patchValue com data formatada:
    // Supondo que "insumo" seja um objeto obtido, 
    // você pode fazer: this.formulario.patchValue({ dataValidade: this.formatDate(new Date(insumo.dataValidade)) });
  }

  // Inicializa o formulário reativo
  inicializarFormulario(): void {
    this.formulario = this.fb.group({
      // Defina os controles que você precisar. Aqui como exemplo temos dataValidade:
      dataValidade: ['', Validators.required]
      // Adicione outros controles conforme necessário.
    });
  }

  // Função para converter uma data no formato Date para o formato "yyyy-MM-dd"
  formatDate(date: Date): string {
    const ano = date.getFullYear();
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const dia = date.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

  carregarInsumos(): void {
    this.insumoService.getTodosInsumo().subscribe(
      (resposta) => {
        console.log('🧾 Insumos recebidos:', resposta);
        this.insumos = resposta;
      },
      (erro: any) => {
        console.error('Erro ao carregar insumos:', erro);
      }
    );
  }

  excluirInsumo(id: number): void {
    if (confirm('Tem certeza que deseja excluir este insumo?')) {
      this.insumoService.deleteInsumo(id).subscribe(
        () => {
          this.insumos = this.insumos.filter(insumo => insumo.id !== id);
        },
        (erro: any) => {
          console.error('Erro ao excluir insumo:', erro);
        }
      );
    }
  }

  editarInsumo(insumo: any): void {
    if (insumo?.id != null) {
      this.router.navigate(['/editar-insumo', insumo.id]);
    } else {
      console.error('ID do insumo está indefinido:', insumo);
      alert('Erro: insumo inválido para edição.');
    }
  }

  verificarInsumosVencer(): void {
    this.insumoService.getInsumosVencer().subscribe(
      (insumosVencer: any[]) => {
        console.log('Resposta de insumos para vencer:', insumosVencer);
        if (insumosVencer && insumosVencer.length > 0) {
          // Constrói uma mensagem com os IDs e nomes dos insumos
          const mensagem = insumosVencer.map(item => `${item.nome}`).join(' | ');
          this.snackBar.open(
            `Atenção! Insumos a vencer: ${mensagem}`,
            'Fechar',
            {
              duration: 10000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              panelClass: ['custom-snackbar']
            }
          );
        }
      },
      (erro: any) => {
        console.error('Erro ao verificar insumos para vencer:', erro);
      }
    );
  }
}  