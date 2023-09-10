import { Component, OnInit } from '@angular/core';
import { IFuncionario } from './funcionario';
import { FuncionarioService } from './funcionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios : IFuncionario[] = [];
  constructor(private funcionarioService : FuncionarioService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.funcionarioService.GetFuncionarios()
      .subscribe(funcionarioWebAPI => this.funcionarios = funcionarioWebAPI);
  }
}
