import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContaService } from 'src/app/services/conta.service';

@Component({
    selector: 'app-relatorio-list',
    templateUrl: './relatorio-list-component.html',
    styleUrls: ['./relatorio-list-component.scss']
})
export class RelatorioListComponent implements OnInit {
    title: string = '';
    @Input() listContas: Array<any> = [];

    constructor(
        private service: ContaService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit(): void {
        this.title = '';
        this.activatedRoute.params.subscribe(params => {});
    }

    getListContas(): void {
        this.service.getContas().subscribe((res) => {
            if (res.data) {
              this.listContas = res.data;
            }
        })
      }

    removeConta(id: number) {
        this.service.excluirConta(id).subscribe((res) => {
          if(res) {
            this.getListContas();
          }
        })
      }
}