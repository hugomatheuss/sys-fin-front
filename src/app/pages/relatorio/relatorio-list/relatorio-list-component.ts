import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Conta } from "src/app/model/conta";

@Component({
    selector: 'app-relatorio-list',
    templateUrl: './relatorio-list-component.html',
    styleUrls: ['./relatorio-list-component.scss']
})
export class RelatorioListComponent implements OnInit {
    title: string = '';
    listResultadoRelatorio: Array<Conta> = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit(): void {
        this.title = 'Resultado';
        this.activatedRoute.params.subscribe(params => {});
    }

    goBack(): void {
        this.location.back();
    }

    getListResultadoRelatorio(): void {
        
    }
}