import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titleCard: string = 'Bem vindo!';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
