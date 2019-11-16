import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';

import { ModulesRoutingModule } from './modules-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ModulesRoutingModule
  ],
  exports: [

  ]
})
export class ModulesModule { }
