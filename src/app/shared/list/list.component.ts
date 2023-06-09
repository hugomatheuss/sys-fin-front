import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() removeConta: EventEmitter<number> = new EventEmitter();
  @Input() listContas: Array<any> = [];
  @Input() listResultadoRelatorio: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToForm(id?: number): void {
    this.router.navigate([`contas/form-conta/${id?? ''}`]);
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case '1':
          return 'Pago'
        case '2':
          return 'À Pagar'
        default:
          return '';
    }
  }

  getTipoLabel(tipo: string): string {
    switch (tipo) {
      case '1':
          return 'Operacional'
        case '2':
          return 'Não Operacional'
        default:
          return '';
    }
  }

  remove(id: number): void {
    this.removeConta.emit(id);
  }

}
