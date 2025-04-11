import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsumoService } from '../../services/insumo.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-editar-insumo',
  templateUrl: './editar-insumo.component.html',
  styleUrls: ['./editar-insumo.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EditarInsumoComponent implements OnInit {
  insumoId!: number;
  insumoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public router: Router,  // Alterado para public
    private fb: FormBuilder,
    private insumoService: InsumoService
  ) {}

  ngOnInit(): void {
    this.insumoId = Number(this.route.snapshot.paramMap.get('id'));

    this.insumoForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]],
      dataEntrada: ['', Validators.required],   // ✅ mesmo nome do back-end
      dataValidade: ['', Validators.required],  // ✅ mesmo nome
      dataSaida: ['']      // ✅ mesmo nome
    });

    this.carregarInsumo();
  }

  carregarInsumo(): void {
    this.insumoService.getTodosInsumo().subscribe(
      (insumos: any[]) => {
        const insumo = insumos.find(item => item.id === this.insumoId);
        if (insumo) {
          this.insumoForm.patchValue(insumo);
        } else {
          alert('Insumo não encontrado!');
          this.router.navigate(['/movimentacao']);
        }
      },
      (erro: any) => {
        console.error('Erro ao carregar insumo:', erro);
      }
    );
  }

  atualizarInsumo(): void {
    if (this.insumoForm.valid) {
      const insumoAtualizado = this.insumoForm.value;
  
      this.insumoService.updateInsumo(this.insumoId, insumoAtualizado).subscribe(
        (resposta) => {
          alert('Insumo atualizado com sucesso!');
          this.router.navigate(['/movimentacao']);
        },
        (erro: any) => {
          console.error('Erro ao atualizar insumo:', erro);
        }
      );
    }
  }
}  
