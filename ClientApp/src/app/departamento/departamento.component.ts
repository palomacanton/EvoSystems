import { Component, OnInit } from '@angular/core';
import { IDepartamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos : IDepartamento[] = [];
  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.departamentoService.GetDepartamentos()
      .subscribe(departamentoWebAPI => this.departamentos = departamentoWebAPI);
  }

}
