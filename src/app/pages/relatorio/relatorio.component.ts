import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

    title: string = '';
    form: UntypedFormGroup;

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
          numeroDocumento: [''],
          dataInicial: [''],
          dataFinal: [''],
        })
       }
    
    ngOnInit(): void {
        this.title = 'Relatório';
        this.activatedRoute.params.subscribe(params => {});
    }

    goBack(): void {
      this.location.back();
    }

    filtrarContas() {
      this.service.filtrarContas(this.form.value).subscribe((res) => {
        
      })
    }
}
