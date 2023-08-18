import { Component, OnInit } from '@angular/core';
import { IFuncionario } from './funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios? : IFuncionario[];
  constructor() { }

  ngOnInit() {
  }

}
