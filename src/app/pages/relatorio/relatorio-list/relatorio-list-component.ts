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
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit(): void {
        this.title = '';
        this.activatedRoute.params.subscribe(params => {});
    }
}