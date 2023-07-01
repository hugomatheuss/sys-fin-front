import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() removeConta: EventEmitter<number> = new EventEmitter();
  @Output() pagarConta: EventEmitter<number> = new EventEmitter();
  @Input() listContas: Array<any> = [];

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

  pagar(id: number): void {
    this.pagarConta.emit(id);
  }

  gerarPdf(): void {
    var data = document.getElementById('content')!;
    console.log(this.listContas);
    
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
}
