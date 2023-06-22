import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioComponent } from './relatorio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RelatorioFormComponent } from './relatorio-form/relatorio-form.component';
import { RelatorioListComponent } from './relatorio-list/relatorio-list-component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
    declarations: [
      RelatorioComponent,
      RelatorioFormComponent,
      RelatorioListComponent
    ],
    imports: [
      CommonModule,
      RelatorioRoutingModule,
      SharedModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatRadioModule,
      CurrencyMaskModule,
    ],
    providers: [
      MatDatepickerModule,
      MatNativeDateModule,    ]
  })
export class RelatorioModule {}