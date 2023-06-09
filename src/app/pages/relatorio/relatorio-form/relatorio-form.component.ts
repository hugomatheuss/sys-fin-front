import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/services/conta.service';

@Component({
    selector: 'app-relatorio-form',
    templateUrl: './relatorio-form.component.html',
    styleUrls: ['./relatorio.form.component.scss']
})
export class RelatorioFormComponent implements OnInit {
    title: string = '';
    form: UntypedFormGroup;
    listContas: Array<any> = [];

    constructor(
        private fb: UntypedFormBuilder,
        private service: ContaService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        this.form = this.fb.group({
          fornecedor: [''],
          valor: [''],
          status: [''],
          numeroDocumento: [''],
          dataInicial: [''],
          dataFinal: [''],
        })
       }
    
    ngOnInit(): void {
        this.title = 'Relatório de contas';
        this.activatedRoute.params.subscribe(params => {});
        this.getListContas();
    }

    goBack(): void {
      this.location.back();
    }

    goToForm(id?: number): void {
      this.router.navigate([`/contas/form-conta/${id?? ''}`]);
    }

    getListContas(): void {
      this.service.getContas().subscribe((res) => {
          if (res.data) {
            this.listContas = res.data;
          }
      })
    }

    filtrarContas(): void {
      this.service.filtrarContas(this.form.value).subscribe((res) => {
        if (res.data) {
          this.listContas = res.data;
        }
      })
    }
}