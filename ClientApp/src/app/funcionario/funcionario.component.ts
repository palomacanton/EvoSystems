import { Component, OnInit } from '@angular/core';
import { IFuncionario } from './funcionario';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios : IFuncionario[] = [];
  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
    this.funcionarioService.getFuncionarios()
      .subscribe(
        (funcionarioWebAPI: any) => {
          this.funcionarios = funcionarioWebAPI;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
