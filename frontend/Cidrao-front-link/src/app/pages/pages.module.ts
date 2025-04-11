import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarInsumoComponent } from './editar-insumo/editar-insumo.component';

// Não declare e nem exporte MovimentacaoComponent ou DashboardComponent aqui
// Pois são standalone components.

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditarInsumoComponent
  ],
  exports: [
    // Não exporte MovimentacaoComponent ou DashboardComponent
  ]
})
export class PagesModule { }
