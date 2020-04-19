import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ResumenDiccionarioComponent } from './resumen-diccionario/resumen-diccionario.component';
import { DiccionarioService } from '../../core/services/diccionario.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ResumenDiccionarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    DiccionarioService
  ],
  exports: [
    PaginaPrincipalComponent
  ]
})
export class PaginaPrincipalModule { }