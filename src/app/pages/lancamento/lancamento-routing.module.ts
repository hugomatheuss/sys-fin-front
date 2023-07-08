import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { LancamentoComponent } from './lancamento.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentoComponent,
    children: [
      {
        path: '',
        component: LancamentoListComponent
      },
      {
        path: 'form-lancamento',
        component: LancamentoFormComponent
      },
      {
        path: 'form-lancamento/:id',
        component: LancamentoFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
