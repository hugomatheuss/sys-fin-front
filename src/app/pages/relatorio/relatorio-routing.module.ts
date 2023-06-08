import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioFormComponent } from './relatorio-form/relatorio-form.component';
import { RelatorioComponent } from './relatorio.component';

const routes: Routes = [
  {
    path: '',
    component: RelatorioComponent,
    children: [
      {
        path: '',
        component: RelatorioFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
