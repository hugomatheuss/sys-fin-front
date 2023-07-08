import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from 'src/app/model/lancamento';
import { LancamentoService } from 'src/app/services/lancamento.service';

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.scss']
})
export class LancamentoListComponent implements OnInit {

  title: string = 'Lançamentos';
  listLancamentos: Array<Lancamento> = [];
  

  constructor(
    private service: LancamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListLancamentos();
  }

  getListLancamentos(): void {
    this.service.getLancamentos().subscribe((res) => {
        if (res.data) {
          this.listLancamentos = res.data;
        }
    })
  }

  removeLancamento(id: number) {
    this.service.excluirLancamento(id).subscribe((res) => {
      if(res) {
        this.getListLancamentos();
      }
    })
  }

  goToForm(id?: number): void {
    this.router.navigate([`/lancamentos/form-lancamento/${id?? ''}`]);
  }
}
