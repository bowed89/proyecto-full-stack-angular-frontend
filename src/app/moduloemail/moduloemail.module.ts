// Importar Modulos Necesarios Para Crear Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar Componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

// NgModel
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainEmailComponent]
})
export class ModuloemailModule { }
