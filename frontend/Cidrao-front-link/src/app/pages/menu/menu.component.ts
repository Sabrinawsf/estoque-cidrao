import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-menu',      // Seletor que será usado para inserir este componente
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }

  

  
}

