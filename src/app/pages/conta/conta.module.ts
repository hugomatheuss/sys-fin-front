import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { ContaComponent } from './conta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContaService } from 'src/app/services/conta.service';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { RouterModule } from '@angular/router';
import { ContaListComponent } from './conta-list/conta-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    ContaComponent,
    ContaFormComponent,
    ContaListComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
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
  ],
  providers: [
    ContaService,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class ContaModule { }
