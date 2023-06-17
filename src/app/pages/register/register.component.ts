import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title: string = '';
  public form: UntypedFormGroup;

  constructor(private service: LoginService, private route: Router, private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.title = 'Criar usuário';
  }

  salvar() {
    this.service.cadastrar(this.form.value).subscribe((res) => {
      if (res.authorization) {
        StorageUtil.store('isLogged', true);
        StorageUtil.store('token', res.authorization.access_token);
        StorageUtil.store('token_type', res.authorization.token_type);
        location.href = '/contas';
      }
    })
  }
}
