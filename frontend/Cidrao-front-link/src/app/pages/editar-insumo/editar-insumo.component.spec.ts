import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditarInsumoComponent } from './editar-insumo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


describe('EditarInsumoComponent', () => {
  let component: EditarInsumoComponent;
  let fixture: ComponentFixture<EditarInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EditarInsumoComponent,
        MatSnackBarModule
        // Se houver outros módulos standalone ou módulos necessários, adicione-os aqui.
      ]
      // Remova a propriedade "declarations", pois EditarInsumoComponent é standalone.
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
