import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsumosComponent } from './pages/insumos/insumos.component';  // Importando componente standalone
import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component'; // Componente standalone
import { MenuComponent } from './pages/menu/menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importando diretamente os componentes standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estoque-cidrao';
}
