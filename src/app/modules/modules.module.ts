import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';

import { ModulesRoutingModule } from './modules-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent
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
