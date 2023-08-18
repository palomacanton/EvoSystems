import { Component, OnInit } from '@angular/core';
import { IDepartamento } from './departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos?: IDepartamento[];
  constructor() { }

  ngOnInit() {
  }

}
