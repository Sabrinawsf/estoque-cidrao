import { Routes } from '@angular/router';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';
import { EditarInsumoComponent } from './pages/editar-insumo/editar-insumo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  {
    path: "menu",
    component: MenuComponent
  },   
  {
    path: "insumos",
    component: InsumosComponent
  },
  {
    path: "movimentacao",
    component: MovimentacaoComponent
  },
  {
    path: "editar-insumo/:id",
    component: EditarInsumoComponent
  }
];


