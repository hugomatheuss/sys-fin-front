import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LancamentoService } from 'src/app/services/lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss']
})
export class LancamentoFormComponent implements OnInit {

  title: string = '';
  form: UntypedFormGroup;
  private id?: number;
  private isEditar: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private service: LancamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.form = this.fb.group({
      id: [''],
      recebimento: ['', Validators.required],
      isDinheiro: [''],
      pagamento: ['', Validators.required],
      isPagamentoMercadoria: [''],
    })
   }

  ngOnInit(): void {
    this.title = 'Adicionar Lançamento';
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.id = params['id'];
        this.isEditar = true;
        this.title = 'Editar Lançamento';
        this.getLancamento();
      }
    });
  }

  getLancamento() {
    if(this.id) {
      this.service.getLancamento(this.id).subscribe((res) => {
        if(res.data) {
          delete res.created_at;
          delete res.updated_at;
          this.form.setValue(res.data);
        }
      })
    }
  }
  
  goBack(): void {
    this.location.back();
  }

  salvaLancamento(): void {
    if(this.form.valid) {
      if(this.isEditar) {
        this.service.editarLancamento(this.form.value).subscribe((res) => {
          if(res) {
            this.router.navigateByUrl('lancamento');
          }
        })
      } else {
        this.service.salvarLancamento(this.form.value).subscribe( {
          next:(res) => {
            this.router.navigateByUrl(`lancamento`);
          },
          error:(err) => {
            console.log(err);
          }
        })
      }
    }
  }

}
