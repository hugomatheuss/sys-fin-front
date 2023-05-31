import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-relatorio-form',
    templateUrl: './relatorio-form.component.html',
    styleUrls: ['./relatorio.form.component.scss']
})
export class RelatorioFormComponent implements OnInit {
    title: string = '';
    form: UntypedFormGroup;

    constructor(
        private fb: UntypedFormBuilder,
    ) {
        this.form = this.fb.group({
          dataInicial: [''],
          dataFinal: [''],
        })
       }
    
    ngOnInit(): void {
        this.title = 'Relatório';
    }
}