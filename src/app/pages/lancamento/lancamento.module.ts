import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoComponent } from './lancamento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { RouterModule } from '@angular/router';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    LancamentoComponent,
    LancamentoFormComponent,
    LancamentoListComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
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
    MatRadioModule,
    CurrencyMaskModule,
    
  ],
  providers: [
    LancamentoService,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class LancamentoModule { }
